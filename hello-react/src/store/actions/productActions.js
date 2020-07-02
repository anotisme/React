export const createProduct = (product) => {
    return (dispatch, getState, { getFireBase, getFireStore }) => {
        const firestore = getFireBase();
        firestore.collection('products').add({
            ...product,
            authorFirstName: 'A',
            authorLastName: 'Not',
            authorId: 1997,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PRODUCT', product });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PRODUCT_ERR', err });
        })
    }
}