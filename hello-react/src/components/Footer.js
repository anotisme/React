import React from 'react';
import './../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <h2 className="sh-heading-content text-left size-s">PAYMENT METHOD</h2>
                    <div className="text-block">
	                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h2 className="sh-heading-content text-left size-s">PAYMENT METHOD</h2>
                    <div className="text-block">
                        <ul className="product_list_widget">
                            <li>
                                <a href="/">
                                    <img width="400" height="400" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559325500_2_5_1-400x400.jpg" className="attachment-woocommerce_thumbnail" alt="" />		
                                    <span className="product-title">Green as Grass</span>
                                </a>    
                                <del>
                                    <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">£</span>24.00
                                    </span>
                                </del> 
                                <ins>
                                    <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">£</span>14.00
                                    </span>
                                </ins>
                            </li>
                            <li>
                                <a href="/">
                                    <img width="400" height="400" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/9393313800_2_2_1-400x400.jpg" className="attachment-woocommerce_thumbnail" alt="" />
                                        <span className="product-title">Little Black Dress</span>
                                </a>
                                <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">£</span>43.00
                                </span>
                            </li>
                            <li>
                                <a href="/">
                                    <img width="400" height="400" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5391345406_2_1_1-1-400x400.jpg" className="attachment-woocommerce_thumbnail" alt="" />
                                        <span className="product-title">Striped denim dress</span>
                                </a>
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
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h2 className="sh-heading-content text-left size-s">SHOPPING GUIDE</h2>
                    <div className="text-block">
                        <ul>
                            <li>
                                <a href="/">FAQ</a>
                            </li>
                            <li>
                                <a href="/">Shipment</a>
                            </li>
                            <li>
                                <a href="/">Policies</a>
                            </li>
                            <li>
                                <a href="/">Clothing care</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h2 className="sh-heading-content text-left size-s">COMPANY</h2>
                    <div className="text-block">
                        <ul>
                            <li>
                                <a href="/">About us</a>
                            </li>
                            <li>
                                <a href="/">Our team</a>
                            </li>
                            <li>
                                <a href="/">Offices</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
