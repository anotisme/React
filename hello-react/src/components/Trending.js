import React from 'react';
import TrendingProducts from './products/TrendingProducts';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './../styles/Trending.css';

class Trending extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <div className="trending-now">
                <div className="container">
                    <div className="sh-heading">
                        <div className="sh-element-margin">
                            <h2 className="size-s text-left" style={{ fontSize: '24px' }}>TRENDING NOW</h2>
                        </div>
                    </div>
                    <div className="vc_empty_space" style={{height: '40px'}}></div>
                    <div className="products">
                        <TrendingProducts products={products} />
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
)(Trending);
