import React from 'react';
import './../styles/Subscribe.css';

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
	render () {
		return (
			<div className="subscribe">
				<div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12"></div>
                        <div className="col-md-6 col-xs-12">
                            <div className="sh-heading">
                                <div className="sh-element-margin">
                                    <h2 className="sh-heading-content size-xxxxl text-center">Subscribe  And Get 10% Off</h2>    
                                </div>
                            </div>
                            <div className="vc_empty_space" style={{height: '20px'}}></div>
                            <div className="sh-heading">
                                <div className="sh-element-margin">
                                    <h2 className="size-s text-center">OUR NEW COLLECTION</h2>
                                </div>
                            </div>
                            <div className="vc_empty_space" style={{height: '70px'}}></div>
                            <div className="contact-form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="sh-cf7-body">
                                        <p>
                                            <span className="wpcf7-form-control-wrap your-email">
                                                <input type="email" name="your-email" defaultValue="" size="40" onChange={ this.handleChange } className="wpcf7-email" placeholder="Enter your email" />
                                            </span>
                                        </p>
                                        <p>
                                            <input type="submit" className="wpcf7-form-control wpcf7-submit" value="Subscribe" />
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12"></div>
                    </div>
				</div>
			</div>
		);
	}
}

export default Subscribe;
