import React from 'react';
import ProductList from './products/ProductList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './../styles/NewArrivals.css';

class NewArrivals extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <div className="new-arrivals">
                <div className="container">
                    <div className="sh-heading">
                        <div className="sh-element-margin">
                            <h2 className="sh-heading-content size-xxl text-center">New arrivals</h2>
                        </div>
                    </div>
                    <div className="sh-heading">
                        <div className="sh-element-margin">
                            <h2 className="sh-heading-content size-s text-center">DENIM DREAMS</h2>
                        </div>
                    </div>
                    <div className="products">
                        <ProductList products={products} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products
    }
}

export default compose(
    firestoreConnect(() => [
        { collection: 'products' }
    ]),
    connect(mapStateToProps)
)(NewArrivals);
