let shoppingCart = {};
const addToStorage = (id) => {

    // get shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    } else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    // add item in local storage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const deleteFromStorage = (id) => {
    // get shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            // add item in local storage
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export { addToStorage, deleteFromStorage }