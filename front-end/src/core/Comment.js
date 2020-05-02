import React, { useState, useEffect } from 'react';
import { uploadComment} from './apiCore';
import moment from "moment";
import { MDBInput } from "mdbreact";
import { isAuthenticated } from '../auth';
import Paginator from 'react-hooks-paginator';
import {unComment} from '../admin/apiAdmin';
import PopUpDeleteComment from './PopUpDeleteComment';

const Comment = ({getComments,product, setRun = f => f, 
  run = undefined,size,currentPage}) => {

//SECTION Product's comment 
   //NOTE State of Object
   
   const [comments,setComments] = useState({
    comment:'',
    userName:'',
    date:''

})
const { user, token } = isAuthenticated();
const [empty, setEmpty] = useState(false);
const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);
const [deleteSuccess, setDeleteSuccess] = useState(false);


const addCommentBtn = () => {
  if(!loading){
    return(
      <button  class="btn algin-center btn-outline-info waves-effect px-5 mb-5">ส่ง</button>
    )
  }
}

const deleteButton = (index) => {
  if(isAuthenticated().user.role == 1){
    return(
    <button data-toggle="modal" data-target={`#${convert(index)}`}  class="btn algin-center btn-danger  waves-effect px-3 mb-5"> ลบ</button>
    )
  }
  
}

const showLoading = () =>
loading && (
    <div className="text-center">
    <div class="spinner-grow text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
<span class="sr-only">Loading...</span>
</div>
    </div>
)

const comment = () => {
return(
   <>
       {isAuthenticated() && isAuthenticated().user.role!== 1 && isAuthenticated().user.role!==2 &&(

    <form onSubmit={clickSubmit}>
 {/* <!--Textarea with icon prefix--> */}
 {/* <!--Textarea with icon prefix--> */}
 <div className="container">
 <MDBInput
       type="textarea"
       label="เขียนความคิดเห็นของท่านได้ที่นี่"
       rows="1"
       icon="pencil-alt "
       onChange={handleChange('comment')}
       value={comments.comment}
     />
     <div className ="col-12 text-center ">

{addCommentBtn()}
</div>
</div>
</form>
)}
</>
) 

}
const setDate = moment().format('L');


const handleChange = name => event => {
 setComments({ ...comments, userName:user.name,date:setDate, [name]: event.target.value });
 console.log('currentPage of comments is '+ currentPage );
}

const alert = () =>{
  if(empty){
  return(
    <div class="alert alert-warning" role="alert">   
    <div className='text-center'>โปรดใส่ความคิดเห็นของท่าน</div>
</div>
  )
  } else if(success){
    return(
      <div class="alert alert-success" role="alert">   
    <div className='text-center'>ลงความคิดเห็นสำเร็จ</div>
  </div>
    )

  }
}

const clickSubmit = event => {
  setLoading(true);
 event.preventDefault();
if(comments.comment!=''){
 uploadComment(product._id,user._id,token, {comments}).then(data => {
     if (data.error) {
         // console.log(data.error);
         alert(data.error);
     } else {              
      setRun(!run);        
      setComments({ ...comments, comment:'' });
      setSuccess(true)
      setEmpty(false)
      setLoading(false)
             // setSuccess(true);
     }
 }
 
 );
}else{
  setEmpty(true)
}
};

const com = [];
//ANCHOR SHOW COMMENT FROM USERS 
const showComments = () =>{
 
 return(
 <>


 <div class="container my-5">


{/* <!--Section: Block Content--> */}
<section class="dark-grey-text mb-5">

 {/* <!-- Section heading --> */}
 <h3 class="font-weight-bold text-center mb-5">รีวิวจากลูกค้า <i class="far fa-comments blue-text"></i></h3>
 {showDeleteSuccess()}

 {
   
 
 getComments.map((res,index) => {
com.push(res)

  const min = 1;
  const max = 1000+index;
  const rand = min + Math.random() * (max - min);
  
 return(
     
 <div class="media my-5">

   <img class="card-img-100 rounded-circle z-depth-1-half d-flex mr-3" src={`https://api.adorable.io/avatars/285/${rand}.png`} alt="Generic placeholder image"/>
   <div class="media-body">
 <h5 class="user-name font-weight-bold">{res.userName}</h5>

     <div class="card-data">
       <ul class="list-unstyled mb-1">
       <li class="comment-date font-small grey-text">
 <i class="far fa-clock"></i> {res.date} 
</li>
       </ul>
     </div>
 <p class="dark-grey-text article">{res.comment}</p>
 <hr/>

   </div>
{deleteButton(index)}
 <PopUpDeleteComment index={index} convert = {convert} c={res._id} destroy={destroy}/>
 </div>

 )})}


 </section>
{/* <!--Section: Block Content--> */}

</div>        


 </>)
}

//SECTION Set Modal
const convert  = (index) => {
  const number = index
  
  return  'a'+number;
 
  
 }

const destroy = (comments) => {
  setLoading(true);
  unComment(product._id, user._id, token,{comments}).then(data => {
    setRun(!run);        
    setDeleteSuccess(true);
    setLoading(false);
  });
};

const showDeleteSuccess = () => {
  if(deleteSuccess){
    return(
      <>
      <div class="alert alert-success" role="alert">   
    <div className='text-center'>ลบความคิดเห็นสำเร็จ</div>
</div>
      </>
    )
  }
}



const PopUpDeleteComment = ({c,destroy,convert,index}) => (
  <>
      {/* // <!-- Central Modal Medium Danger --> */}
      <div class="modal fade" id={convert(index)} tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-notify modal-danger" role="document">
          {/* <!--Content--> */}
          <div class="modal-content">
            {/* <!--Header--> */}
            <div class="modal-header">
              <p class="heading lead">ลบความคิดเห็น</p>
     
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="white-text">&times;</span>
              </button>
            </div>
     
            {/* <!--Body--> */}
            <div class="modal-body">
              <div class="text-center">
                <i class="fas fa-times fa-4x mb-3 animated rotateIn"></i>
                <p>คุณแน่ใจหรือไม่ ที่จะยืนยันการลบ ความคิดเห็นนี้</p>
              </div>
            </div>
     
            {/* <!--Footer--> */}
            <div class="modal-footer justify-content-center">
              <a type="button" data-dismiss="modal" onClick={() => destroy(c)} class="btn btn-danger">ลบเดี๋ยวนี้ <i class="far fa-times-circle ml-1 text-white"></i></a>
              <a type="button" class="btn btn-outline-danger waves-effect" data-dismiss="modal">ไม่ดีกว่า</a>
            </div>
          </div>
          {/* <!--/.Content--> */}
        </div>
      </div>
      {/* // <!-- Central Modal Medium Danger--> */}
  
  </>
  
  
  )
    return(

        <>
      <div className="container">

      {alert()}


      </div>
      {showLoading()}
{comment()}
{showComments()}


        </>
    )
}

export default Comment;