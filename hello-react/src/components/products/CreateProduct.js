import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from './../../store/actions/productActions';

class CreateProduct extends React.Component {
    state = {
		name: '',
		description: '',
		category: '',
		price: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProduct(this.state);
    }
    render() {
        return (
            <div>
                <div className="container">
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
							<div className="card card-signin my-5">
								<div className="card-body">
									<h5 className="card-title text-center">Create new product</h5>
									<form className="form-signin" onSubmit={this.handleSubmit}>
										<div className="form-label-group">
											<label htmlFor="name">Product name</label>
											<input name="name" type="text" id="name" className="form-control" placeholder="Product name" required autoFocus onChange={this.handleChange} />
										</div>
		
										<div className="form-label-group">
											<label htmlFor="description">Description</label>
											<textarea name="description" type="text" id="description" className="form-control" placeholder="Description" required onChange={this.handleChange}></textarea>
										</div>
                                        
										<div className="form-label-group">
											<label htmlFor="category">Category</label>
											<input name="category" type="text" id="category" className="form-control" placeholder="Category" onChange={this.handleChange} />
										</div>
                                        
										<div className="form-label-group">
											<label htmlFor="price">Price</label>
											<input name="price" type="text" id="price" className="form-control" placeholder="Price" onChange={this.handleChange} />
										</div>
										<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add Product</button>
                                    </form>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(CreateProduct);