import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './../../styles/products/Products.css';

const ProductDetails = (props) => {
    const { product } = props;
    if(product) {
        return (
            <div className="product-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <h2>Sidebar here</h2>
                        </div>
                        <div className="col-md-8 col-xs-12">
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="sh-woo-layout-image">
                                        <span className="sh-popover-mini sh- fadeIn animated">Sale!</span>
                                        <div className="images">
                                            <figure className="woocommerce-product-gallery__wrapper">
                                                <div className="product-image">
                                                    <a href="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5391345406_2_1_1-1.jpg">
                                                        <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5391345406_2_1_1-1-1024x1308.jpg" 
                                                        className="attachment-shop_single size-shop_single wp-post-image" alt="" style={{width: "100%"}}/>
                                                    </a>
                                                </div>	
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="entry-summary">
                                        <h1 itemProp="name" className="product_title entry-title">{ product.name }</h1>
                                        <p className="price">
                                            <del>
                                                <span className="woocommerce-Price-amount amount">
                                                    <span className="woocommerce-Price-currencySymbol">£</span>{ product.price }
                                                </span>
                                            </del> 
                                            <ins>
                                                <span className="woocommerce-Price-amount amount">
                                                    <span className="woocommerce-Price-currencySymbol">£</span>{ product.price }
                                                </span>
                                            </ins>
                                        </p>
                                        <div className="woo-short-description" itemProp="description">
                                            <p>{ product.description }</p>
                                        </div>
                                        <div className="product_meta">
                                            <span className="posted_in">
                                                <span className="woo-meta-title">Category:</span>
                                                <a href="https://jevelin.shufflehound.com/fashion-shop/product-category/women/dress-women/" rel="tag">{ product.category }</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="product-details">
                <div className="container">
                    <p>Loading... products</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const products = state.firestore.data.products;
    const product = products ? products[id] : null
    return {
        product: product
    }
}

export default compose(
    firestoreConnect(() => [
        { collection: 'products' }
    ]),
    connect(mapStateToProps)
)(ProductDetails);