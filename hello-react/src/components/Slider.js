import React from 'react';
import './../styles/Slider.css';

class Slider extends React.Component {
	render () {
		return (
			<div className="slider">
				<div className="container">
					<h1>Welcome to Jezlin Shop</h1>
					<h3>Shop today and get <strong>20% discount</strong></h3>
					<button type="button" className="btn btn-primary"><a href="/">Shop now</a></button>
				</div>
			</div>
		);
	}
}

export default Slider;
