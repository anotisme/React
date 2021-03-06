import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductSummary = ({product}) => {
    console.log(product)
    return (
        <div className="col-md-4">
            
            <div className="product-item">
                <figure>
                    { (product.downloadURLs) ? 
                    <a href={'/product/' + product.id} ><img src={product.downloadURLs} className="img-fluid" style={{width: "100%"}} alt=""/></a> 
                    : 
                    <img src={'/assets/default-placeholder-image.png'} 
                        className="attachment-shop_single size-shop_single img-fluid" alt="" style={{width: "100%"}}/>
                    }
                </figure>
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
                    <a href={ product.id} className="button add_to_cart_button">
                        <FontAwesomeIcon icon={faCartPlus} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductSummary;