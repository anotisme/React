import React from 'react';
import './../styles/NewArrivals.css';

function NewArrivals() {
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
                <div className="row">
                    <div className="col-md-4">
                        <div className="product-item">
                            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5391345406_2_2_1-1-400x400.jpg" className="img-fluid" alt="" />
                            <div className="sh-woo-post-content-container">
                                <h2 className="woocommerce-loop-product__title">Striped denim dress</h2>
                                <div className="additional-information sh-default-color">Dress</div>
                                    <span className="price">
                                        <del>
                                            <span className="woocommerce-Price-amount amount">
                                                <span className="woocommerce-Price-currencySymbol">£</span>34.00
                                            </span>
                                        </del> 
                                        <ins>
                                            <span className="woocommerce-Price-amount amount">
                                                <span className="woocommerce-Price-currencySymbol">£</span>19.99
                                            </span>
                                        </ins>
                                    </span>
                                <a href="/" className="button add_to_cart_button">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5391345406_2_2_1-1-400x400.jpg" className="img-fluid" alt="" />
                            <div className="sh-woo-post-content-container">
                                <h2 className="woocommerce-loop-product__title">Striped denim dress</h2>
                                <div className="additional-information sh-default-color">Dress</div>
                                    <span className="price">
                                        <del>
                                            <span className="woocommerce-Price-amount amount">
                                                <span className="woocommerce-Price-currencySymbol">£</span>34.00
                                            </span>
                                        </del> 
                                        <ins>
                                            <span className="woocommerce-Price-amount amount">
                                                <span className="woocommerce-Price-currencySymbol">£</span>19.99
                                            </span>
                                        </ins>
                                    </span>
                                <a href="/" className="button add_to_cart_button">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-item">
                            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5391345406_2_2_1-1-400x400.jpg" className="img-fluid" alt="" />
                            <div className="sh-woo-post-content-container">
                                <h2 className="woocommerce-loop-product__title">Striped denim dress</h2>
                                <div className="additional-information sh-default-color">Dress</div>
                                <span className="price">
                                    <del>
                                        <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol">£</span>34.00
                                        </span>
                                    </del> 
                                    <ins>
                                        <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol">£</span>19.99
                                        </span>
                                    </ins>
                                </span>
                                <a href="/" className="button add_to_cart_button">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default NewArrivals;
