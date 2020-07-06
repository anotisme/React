import React from 'react';
import { Link } from 'react-router-dom';

const ProductSummary = ({product}) => {
    return (
        <div className="col-md-4">
            
            <div className="product-item">
                <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5391345406_2_2_1-1-400x400.jpg" className="img-fluid" alt="" />
                <div className="sh-woo-post-content-container">
                    <h2 className="woocommerce-loop-product__title">
                        <Link to={'/product/' + product.id}>
                            { product.name }
                        </Link>
                    </h2>
                    <div className="additional-information sh-default-color">{ product.category }</div>
                    <span className="price">
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
                    </span>
                    <a href={ product.id} className="button add_to_cart_button">Add to cart</a>
                </div>
            </div>
        </div>
    );
}

export default ProductSummary;