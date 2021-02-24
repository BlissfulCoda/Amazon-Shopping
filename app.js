

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
    const { cart } = user;
    const taxRate = .2;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    });
    return Object.assign({}, user, { cart: updatedCart})
}

function buyItem(user){
    return user;
}

function emptyCart(user){
    return user;
}