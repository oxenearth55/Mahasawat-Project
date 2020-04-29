import React, { useState, useEffect } from 'react';
import { uploadComment} from './apiCore';
import moment from "moment";
import { MDBInput } from "mdbreact";
import { isAuthenticated } from '../auth';
import Paginator from 'react-hooks-paginator';


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

<button  class="btn algin-center btn-outline-info waves-effect px-5 mb-5">ส่ง

</button>
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
     {/* <!-- Rating --> */}
     {/* <ul class="rating mb-2">
       <li>
         <i class="fas fa-star blue-text"></i>
       </li>
       <li>
         <i class="fas fa-star blue-text"></i>
       </li>
       <li>
         <i class="fas fa-star blue-text"></i>
       </li>
       <li>
         <i class="fas fa-star blue-text"></i>
       </li>
       <li>
         <i class="fas fa-star blue-text"></i>
       </li>
     </ul> */}
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
 </div>

 )})}


 </section>
{/* <!--Section: Block Content--> */}


</div>        


 </>)
}


    return(

        <>
      <div className="container">

      {alert()}


      </div>
{comment()}
{showComments()}


        </>
    )
}

export default Comment;