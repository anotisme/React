import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

class Introduction extends React.Component {
    render() {
        return (
            <div className="intro">
                <div className="container content">
                    <div className="row"> 
                        <div className="col-sm-4">
                            <div className="sh-column-wrapper">
                                <div className="sh-iconbox ">
                                    <div className="sh-iconbox-icon">
                                        <div className="sh-iconbox-icon-shape sh-iconbox-circle">
                                            <FontAwesomeIcon icon={faCoffee} />
                                        </div>
                                    </div>
                                    <div className="sh-iconbox-aside">
                                        <div className="sh-iconbox-title">
                                            <h3>NEXT DAY SHIPPING</h3>
                                        </div>
                                        <div className="sh-iconbox-seperator"></div>
                                        <div className="sh-iconbox-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;Donec aliquet est et congue aliquet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="sh-column-wrapper">
                                <div className="sh-iconbox ">
                                    <div className="sh-iconbox-icon">
                                        <div className="sh-iconbox-icon-shape sh-iconbox-circle">
                                            <FontAwesomeIcon icon={faAward} />
                                        </div>
                                    </div>
                                    <div className="sh-iconbox-aside">
                                        <div className="sh-iconbox-title">
                                            <h3>FREE 20 DAY RETURNS</h3>
                                        </div>
                                        <div className="sh-iconbox-seperator"></div>
                                        <div className="sh-iconbox-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;Donec aliquet est et congue aliquet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="sh-column-wrapper">
                                <div className="sh-iconbox ">
                                    <div className="sh-iconbox-icon">
                                        <div className="sh-iconbox-icon-shape sh-iconbox-circle">
                                            <FontAwesomeIcon icon={faUserShield} />
                                        </div>
                                    </div>
                                    <div className="sh-iconbox-aside">
                                        <div className="sh-iconbox-title">
                                            <h3>SECURE CHECKOUT</h3>
                                        </div>
                                        <div className="sh-iconbox-seperator"></div>
                                        <div className="sh-iconbox-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;Donec aliquet est et congue aliquet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container xs">
                    <div className="banner">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 left-side">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <div className="sh-icon  sh-icon-center">
                                            <div className="sh-element-margin">
                                                <div className="sh-icon-container">
                                                    <i className="sh-icon-data ti-cloud"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sh-heading">
                                            <div className="sh-element-margin">
                                                <h2 className="sh-heading-content size-xxxxl text-center">This Season</h2>
                                            </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: '20px'}}></div>
                                        <div className="sh-heading">
                                            <div className="sh-element-margin">
                                                <h2 className="size-s text-center">BE READY TO CHANGE</h2>
                                            </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: '70px'}}></div>
                                        <div className="sh-button-container sh-button-style-2">
                                            <div className="sh-element-margin">
                                                <button type="button" className="btn btn-danger">
                                                    <a href="/shop/women">Shop women</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 right-side">
                                <figure>
                                    <img src="/assets/1.jpg" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;
