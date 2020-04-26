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
        error: false,
        success: false     
    });

    const { user, token } = isAuthenticated();
    const { name, email, password, error, success } = values;
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
        if(user.role === 1 || user.role === 2){
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

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
        // if(name==='shop'){
        //     setShopObjectID({[name]: e.target.value});

        // }

      
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
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/" />;
        }
    };

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
                <label className="text-muted">รหัส</label>
                <input type="password" onChange={handleChange('password')} className="form-control" value={password} />
            </div>

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
            {profileUpdate(name, email, password)}

            {redirectUser(success)}
            </div>
          
        </Layout>
    );
};

export default Profile;
