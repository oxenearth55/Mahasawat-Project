

export const addItem = (item = [], count = 0, next = f => f) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {  //If it has cart in local storage then ...
            //NOTE to convert json to object 
            // get product from local storage 
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        //NOTE store it as an Array of Object 
        cart.push({
            ...item,
            count: 1 // NOTE intitial count after item was added by a user is one
        });
        
        // remove duplicates
        // build an Array from new Set and turn it back into array using Array.from
        // so that later we can re-map it
        // new set will only allow unique values in it
        // so pass the ids of each object/product
        // If the loop tries to add the same value again, it'll get ignored
        // ...with the array of ids we got on when first map() was used
        // run map() on it again and return the actual product from the cart

        cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
            return cart.find(p => p._id === id);
        });

        localStorage.setItem('cart', JSON.stringify(cart));
        next();
    }
};



//SECTION SHIPPING
export const addNabuaShip = (item = [], count = 0, next = f => f) => {
    let nabuaShip = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('nabuaShip')) {  //If it has cart in local storage then ...
            //NOTE to convert json to object 
            // get product from local storage 
            nabuaShip = JSON.parse(localStorage.getItem('nabuaShip'));
        }   
        nabuaShip = item;
        localStorage.setItem('nabuaShip', JSON.stringify(nabuaShip));
        next();
    }
};

export const addFakkhawShip = (item = [], count = 0, next = f => f) => {
    let fakkhawShip = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('fakkhawShip')) {  //If it has cart in local storage then ...
            //NOTE to convert json to object 
            // get product from local storage 

            fakkhawShip = JSON.parse(localStorage.getItem('fakkhawShip'));
        }   
        fakkhawShip = item;
        
        localStorage.setItem('fakkhawShip', JSON.stringify(item));
        next();
    }
};


export const getNabuaShip = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('nabuaShip')) {
            return JSON.parse(localStorage.getItem('nabuaShip'));
        }
    }
    return [];
};

export const getFakkhawShip = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('fakkhawShip')) {
            return JSON.parse(localStorage.getItem('fakkhawShip'));
        }
    }
    return [];
};



//SECTION CART 
export const addNabuaItem = (item = [], count = 0, next = f => f) => {
    let nabua = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('nabua')) {  //If it has cart in local storage then ...
            //NOTE to convert json to object 
            // get product from local storage 
            nabua = JSON.parse(localStorage.getItem('nabua'));
        }
        //NOTE store it as an Array of Object 
        nabua.push({
            ...item,
            count: 1 // NOTE intitial count after item was added by a user is one
        });   

        nabua = Array.from(new Set(nabua.map(p => p._id))).map(id => {
            return nabua.find(p => p._id === id);
        });

        nabua= Array.from(new Set(nabua.map(item => ({
            _id: item._id,
            name: item.name,
            price: item.price,
            // shop: item.shop._id,
            count: item.count,
            quantity: item.quantity


      }))));

        localStorage.setItem('nabua', JSON.stringify(nabua));
        next();
    }
};


export const addFakkhawItem = (item = [], count = 0, next = f => f) => {
    let fakkhaw = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('fakkhaw')) {  //If it has cart in local storage then ...
            //NOTE to convert json to object 
            // get product from local storage 
            fakkhaw = JSON.parse(localStorage.getItem('fakkhaw'));
        }

        //NOTE store it as an Array of Object 
        fakkhaw.push({
            ...item,
            count: 1 // NOTE intitial count after item was added by a user is one
        });
        
        // remove duplicates
        // build an Array from new Set and turn it back into array using Array.from
        // so that later we can re-map it
        // new set will only allow unique values in it
        // so pass the ids of each object/product
        // If the loop tries to add the same value again, it'll get ignored
        // ...with the array of ids we got on when first map() was used
        // run map() on it again and return the actual product from the cart

        fakkhaw = Array.from(new Set(fakkhaw.map(p => p._id))).map(id => {
            return fakkhaw.find(p => p._id === id);
        });

        fakkhaw= Array.from(new Set(fakkhaw.map(item => ({
            _id: item._id,
            name: item.name,
            price: item.price,
            // shop: item.shop._id,
            count: item.count,
            quantity: item.quantity

      }))));

        localStorage.setItem('fakkhaw', JSON.stringify(fakkhaw));
        next();
    }
};

export const itemTotal = () => {
  
    let total = 0;
    let nabuaNum =0;
    let fakkhawNum =0;
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('nabua')) {
            nabuaNum = JSON.parse(localStorage.getItem('nabua')).length
            total +=nabuaNum
        }if(localStorage.getItem('fakkhaw')) {
            fakkhawNum = JSON.parse(localStorage.getItem('fakkhaw')).length
            total +=fakkhawNum

    }
}
    return total;
};

// export const getCart = () => {
//     if (typeof window !== 'undefined') {
//         if (localStorage.getItem('cart')) {
//             return JSON.parse(localStorage.getItem('cart'));
//         }
//     }
//     return [];
// };

export const getNabua = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('nabua')) {
            return JSON.parse(localStorage.getItem('nabua'));
        }
    }
    return [];
};

export const getFakkhaw = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('fakkhaw')) {
            return JSON.parse(localStorage.getItem('fakkhaw'));
        }
    }
    return [];
};




// //SECTION Nabua's products 
// export const getNabuaProducts = () => {
//     let cart =[];
//     let nabua =[];
//     if (typeof window !== 'undefined') {
//         if (localStorage.getItem('nabua')) {
//             nabua = JSON.parse(localStorage.getItem('nabua')); 
//         }

//         nabua.map((c, i) => {
//             if(c.shop._id === '5e6a17a35c566806d6a101dd') {
//                 nabua.push(c);


//             }
//         });
//         // NOTE push nabua's product to Local storage
//         localStorage.setItem('nabua', JSON.stringify(nabua));

//     }
//     return  JSON.parse(localStorage.getItem('nabua'));

// };


// //SECTION Frakhaw's products 
// export const getfakkhawProducts = () => {
//     let cart =[];
//     let fakkhaw =[];
//     if (typeof window !== 'undefined') {
//         if (localStorage.getItem('cart')) {
//             cart = JSON.parse(localStorage.getItem('cart')); 
//         }

//         cart.map((c, i) => {
//             if(c.shop._id === '5e6a17ac5c566806d6a101de') {
//                 fakkhaw.push(c);
//             }
//         });
//         // NOTE push nabua's product to Local storage
//         localStorage.setItem('fakkhaw', JSON.stringify(fakkhaw));

//     }
//     return  JSON.parse(localStorage.getItem('fakkhaw'));

// };





export const updateItemNabua = (productId, count) => {
    let nabua = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('nabua')) {
            nabua = JSON.parse(localStorage.getItem('nabua')); //NOTE keep Object in cart Array 
        }

        nabua.map((product, i) => {
            if (product._id === productId) {
                nabua[i].count = count; // NOTE Update count at index(i)
            }
        });

        localStorage.setItem('nabua', JSON.stringify(nabua));
    }
};


export const updateItemFakkhaw = (productId, count) => {
    let fakkhaw = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('fakkhaw')) {
            fakkhaw = JSON.parse(localStorage.getItem('fakkhaw')); //NOTE keep Object in cart Array 
        }

        fakkhaw.map((product, i) => {
            if (product._id === productId) {
                fakkhaw[i].count = count; // NOTE Update count at index(i)
            }
        });

        localStorage.setItem('fakkhaw', JSON.stringify(fakkhaw));
    }
};





export const removeItem = productId => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) { 
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        cart.map((product, i) => {
            if (product._id === productId) {
                cart.splice(i, 1); //NOTE remove product that match with product._id; i is index, 1 is number that is removed
            }
        });

        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
};

export const removeNabua = productId => {
    let nabua = [];

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('nabua')) { 
            nabua = JSON.parse(localStorage.getItem('nabua'));
        }

        nabua.map((product, i) => {
            if (product._id === productId) {
                nabua.splice(i, 1); //NOTE remove product that match with product._id; i is index, 1 is number that is removed
            }
        });

        localStorage.setItem('nabua', JSON.stringify(nabua));
    }
    return nabua;
};

export const removeFakkhaw = productId => {
    let fakkhaw = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('fakkhaw')) { 
            fakkhaw = JSON.parse(localStorage.getItem('fakkhaw'));
        }

        fakkhaw.map((product, i) => {
            if (product._id === productId) {
                fakkhaw.splice(i, 1); //NOTE remove product that match with product._id; i is index, 1 is number that is removed
            }
        });

        localStorage.setItem('fakkhaw', JSON.stringify(fakkhaw));
    }
    return fakkhaw;
};


export const emptyCart = next => {
    if (typeof window !== 'undefined') {
        // localStorage.removeItem('cart');
        localStorage.removeItem('nabua');
        localStorage.removeItem('fakkhaw');
        localStorage.removeItem('fakkhawShip');
        localStorage.removeItem('nabuaShip');


        next();
    }
};


export const emptyNabua = () => {
    if (typeof window !== 'undefined') {
        // localStorage.removeItem('cart');
        localStorage.removeItem('nabuaShip');


    }
};



export const emptyFakkhaw = () => {
    if (typeof window !== 'undefined') {
        // localStorage.removeItem('cart');
        localStorage.removeItem('fakkhawShip');


    }
};

