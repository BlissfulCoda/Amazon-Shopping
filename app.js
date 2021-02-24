

const user = {
    name: 'Ronnie',
    active: true,
    cart: [],
    purchases: []
}

purchaseItem(user, {name: 'Iphone', price: 600})
function purchaseItem(user, item){
    return Object.assign({}, user, {purchases: item})
}

function addItemToCart(){}

function applyTaxToItems(){}

function buyItem() {}

function emptyCart() {}