import { API } from '../config';

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const updateCategory = (categoryId, userId, token, category) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: 'PUT',
        headers: {
            // content type?
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteCategory = (categoryId, userId, token,category) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
//NOTE return category from backend 
export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'GET'
    })
        .then(response => { 
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listOrders = (userId, token) => {
    return fetch(`${API}/order/list/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getStatusValues = (userId, token) => {
    return fetch(`${API}/order/status-values/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const decreaseProductAmount = (userId, token,decreaseProduct) => {
    return fetch(`${API}/reduce/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ order: decreaseProduct })
    })
        // .then(response => {
        //     return response.json();
        // })
        .catch(err => console.log(err));
};


export const updateOrderStatus = (userId, token,orderId,status) => {
    return fetch(`${API}/order/status/${orderId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status,orderId })
    })
        // .then(response => {
        //     return response.json();
        // })
        .catch(err => console.log(err));
};





/**
 * to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */

export const getProducts = () => {
    return fetch(`${API}/products?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//NOTE Delete Order 
export const deleteOrder = (orderId, userId, token) => {
    return fetch(`${API}/order/${orderId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//NOTE Get single product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const uploadSlip = (orderId, userId, token, slip) => {
    return fetch(`${API}/order/${orderId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: slip

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateCheckSold = (orderId,userId, token, checkSold) => {
    return fetch(`${API}/checkSold/${orderId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: checkSold
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};




export const uploadDeliver = (orderId, userId, token, slip) => {
    return fetch(`${API}/deliver/${orderId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: slip

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//NOTE retrive user Object from backend 
export const getUsers = () => {
    return fetch(`${API}/users`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//NOTE Update admin role 

export const updateUserRole = (userId, token, uId, role) => {
    return fetch(`${API}/user/${uId}/${role}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ role, uId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};





export const createShop = (userId, token, shop) => {
    return fetch(`${API}/shop/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body:shop
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};




export const deleteOther = (otherId, userId, token) => {
    return fetch(`${API}/user/${otherId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



//SECTION Shop
// export const updateShop = (shopId,token, formData) => {
//     return fetch(`${API}/shop/update/${shopId}`, {
//         method: 'PUT',
//         headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`
//         },
//         body: formData

//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };


export const updateBankAccount = (shopId,userId, token, bankinfo) => {
    return fetch(`${API}/bank/update/${shopId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bankinfo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};




export const updateShopContact = (shopId,userId, token, contact) => {
    return fetch(`${API}/contact/update/${shopId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(contact)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



//NOTE get shop name 
export const getShopList = (userId, token) => {
    return fetch(`${API}/shop/shop-name/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getShop = () => {
    return fetch(`${API}/getShop`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



//NOTE Get Shop information
export const getSpecificShop = shopId => {
    return fetch(`${API}/shop/${shopId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
//NOTE Update Banking QrCode and Shop contact
export const updateShopQrBank = (shopId, userId, token, QR) => {
    return fetch(`${API}/update/bankqr/${shopId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: QR
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateShopQrLine = (shopId, userId, token, QR) => {
    return fetch(`${API}/update/lineqr/${shopId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: QR
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//ANCHOR Manage Shipping 
export const addShipping = (shopId,userId, token, shipping) => {
    return fetch(`${API}/shipping/${shopId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(shipping)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const unComment = (productId,userId, token, comments) => {
    return fetch(`${API}/uncomment/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(comments)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
