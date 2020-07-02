const initState = {
    products: [
        {id: '1', name: 'product 1', description: 'This is product 1', category: 'category 1', price: '1000'},
        {id: '2', name: 'product 2', description: 'This is product 2', category: 'category 2', price: '2000'},
        {id: '3', name: 'product 3', description: 'This is product 3', category: 'category 3', price: '3000'}
    ]
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            console.log('created product', action.product);
            return state;
        case 'CREATE_PRODUCT_ERR':
            console.log('created product', action.err);
            return state;
        default:
            return state;
    }
}

export default productReducer;