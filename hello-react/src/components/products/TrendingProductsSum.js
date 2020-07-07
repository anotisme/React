import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const TrendingProductsSum = ({product}) => {
    return (
        <div className="col-md-3">
            <div className="product-item">
                <a href={ '/product' + product.id } className="product__link">
                    <div className="test">
                        <figure>
                            <img width="100%" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5593559500_2_5_1-400x400.jpg" 
                            className="attachment-woocommerce_thumbnail" alt="" />
                        </figure>
                    </div>
                </a>
                <div className="sh-woo-post-content-container">
                    <h2 className="woocommerce-loop-product__title">
                        <Link to={'/product/' + product.id}>
                            { product.name }
                        </Link>
                    </h2>
                    <div className="additional-information sh-default-color">
                        { product.category }
                    </div>
                    <span className="price">
                        <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">£</span>{ product.price }
                        </span>
                    </span>
                    <a href={ product.id} className="button add_to_cart_button">
                        <FontAwesomeIcon icon={faCartPlus} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TrendingProductsSum;