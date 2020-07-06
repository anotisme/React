export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirebase().firestore();
        firestore.collection('products').add({
            ...product,
            authorFirstName: 'A',
            authorLastName: 'Not',
            authorId: 1123,
            createAt: new Date().getFullYear()
        }).then(() => {
            dispatch({ type: 'CREATE_PRODUCT', product });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PRODUCT_ERR', err });
        })
    }
};