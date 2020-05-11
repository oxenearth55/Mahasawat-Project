import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { read, update, updateUser } from './apiUser';
import { getShop } from '../admin/apiAdmin';


const Profile = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword:'',
        error: false,
        success: false     
    });

    const { user, token } = isAuthenticated();
    const [repeatError, setRepeatError] = useState(false);
    const { name, email, password,repeatPassword, error, success } = values;
    const [shopObject, setShopObject] = useState([])

    //SECTION Update Shop for Admin only
    const getShopObject = () => {
        getShop().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
             } 
            else {
                setShopObject(data);
            }
        });
    };

    const shopName = () => {
        if(user.role === 1){
            return (           
            shopObject.map((s, i) => {
                if(s._id === user.shop){
                    return(
                    <div className ="row my-4 "> 
                       <h4 className="text-white bg-dark px-3 py-3">ร้านค้าของคุณคือ</h4><h4 className="border px-3 py-3">  {s.name}</h4> 
                       </div>
                    );
                }

            }
        
            )
            );
    }
    }

    

    // SECTION Update profile

    const init = userId => {
        // console.log(userId);
        //NOTE  grab user information from backend
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, email: data.email, password: data.password}); //NOTE 
            }
        });
    };

    useEffect(() => {
        init(match.params.userId); //NOTE grab userID from URL (Route)
        getShopObject();
    }, []);
    
    //const [newPassword, setNewPassword] = useState(false)

    const handleChange = name => e => {
        setValues({ ...values, error: false,success:false, [name]: e.target.value });
        setRepeatError(false);
       
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, { name, email, password }).then(data => {
            if (data.error) {
                // console.log(data.error);
                alert(data.error);
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        name: data.name,
                        email: data.email,                     
                        success: true
                    });
                }                
                );
            }
        });
    
}

  

    const showError = () =>{
        if(repeatError){
            return(
        <div class="alert alert-danger text-center" role="alert">
            กรุณากรอกรหัสให้ตรงกัน
        </div>
            )
        }
    }

    const showSuccess = () =>{
        if(success == true){
            return(
        <div class="alert alert-success text-center" role="alert">
            ทำการเปลี่ยนแปลงโปรไฟล์เรียบร้อย
        </div>
            )
        }
    }

    const profileUpdate = (name, email, password) => (
        <form>
            <h1>{shopName()}</h1>
            <div className="form-group">
                <label className="text-muted">ชื่อ</label>
                <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
            </div>
            <div className="form-group">
                <label className="text-muted">อีเมล</label>
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">รหัสใหม่</label>
                <input type="password" onChange={handleChange('password')} className="form-control" value={password} />
            </div>

            {/* <div className="form-group">
                <label className="text-muted">ยืนยันรหัสใหม่</label>
                <input type="password" onChange={handleChange('repeatPassword')} className="form-control" />
            </div> */}

            <button onClick={clickSubmit} className="btn btn-primary">
                ยืนยัน
            </button>
        </form>
    );

    

    return (
        <Layout title="โปรไฟล์" description="คุณสามารถอัพเดทโปรไฟล์ได้ที่นี่" className="container-fluid"
        headerImg="dashBoardImgLayout"
        >
            <div className="container">
            <h2 className="mb-4">อัพเดทโปรไฟล์</h2>
            {showError()}
            {showSuccess()}
            {profileUpdate(name, email, password)}

            </div>
          
        </Layout>
    );
};

export default Profile;
