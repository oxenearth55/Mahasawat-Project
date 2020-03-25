


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

export const itemTotal = () => {
  
    
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
           
            return  JSON.parse(localStorage.getItem('cart')).length;
        }
    }
    return 0;
};

export const getCart = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'));
        }
    }
    return [];
};

//SECTION Nabua's products 
export const getNabuaProducts = () => {
    let cart =[];
    let nabua =[];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')); 
        }

        cart.map((c, i) => {
            if(c.shop === '5e6a17a35c566806d6a101dd') {
                nabua.push(c);


            }
        });
        // NOTE push nabua's product to Local storage
        localStorage.setItem('nabua', JSON.stringify(nabua));

    }
    return  JSON.parse(localStorage.getItem('nabua'));

};


//SECTION Frakhaw's products 
export const getfakkhawProducts = () => {
    let cart =[];
    let fakkhaw =[];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')); 
        }

        cart.map((c, i) => {
            if(c.shop === '5e6a17ac5c566806d6a101de') {
                fakkhaw.push(c);
            }
        });
        // NOTE push nabua's product to Local storage
        localStorage.setItem('fakkhaw', JSON.stringify(fakkhaw));

    }
    return  JSON.parse(localStorage.getItem('fakkhaw'));

};





export const updateItem = (productId, count) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')); //NOTE keep Object in cart Array 
        }

        cart.map((product, i) => {
            if (product._id === productId) {
                cart[i].count = count; // NOTE Update count at index(i)
            }
        });

        localStorage.setItem('cart', JSON.stringify(cart));
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

export const emptyCart = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
        localStorage.removeItem('nabua');
        localStorage.removeItem('fakkhaw');
        next();
    }
};

