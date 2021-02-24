

const user = {
    name: 'Ronnie',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f, g) => (...args) => f(g(...args))

console.log(purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
    )(user, {name: 'MacBook', price: 800}))

function purchaseItem(...fns){
    return fns.reduce(compose)
}

function addItemToCart(user, item){
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updatedCart})
}

function applyTaxToItems(user){
    return user;
}

function buyItem(user){
    return user;
}

function emptyCart(user){
    return user;
}