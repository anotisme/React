import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from './../../store/actions/productActions';
import FileUploader from 'react-firebase-file-uploader'
import firebase from "./../../firebase";

class CreateProduct extends React.Component {
    state = {
		name: '',
		description: '',
		category: '',
		price: '',
		filenames: [],
		downloadURLs: [],
		isUploading: false,
		uploadProgress: 0
	}
	handleUploadStart = () =>
		this.setState({
			isUploading: true,
			uploadProgress: 0
	});

	handleProgress = progress =>
		this.setState({
			uploadProgress: progress
	});

	handleUploadError = error => {
		this.setState({
			isUploading: false
			// Todo: handle error
		});
		console.error(error);
	};

	handleUploadSuccess = async filename => {
		const downloadURL = await firebase
			.storage()
			.ref("images")
			.child(filename)
			.getDownloadURL();

		this.setState(oldState => ({
			filenames: [...oldState.filenames, filename],
			downloadURLs: [...oldState.downloadURLs, downloadURL],
			uploadProgress: 100,
			isUploading: false
		}));
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	
    handleSubmit = (e) => {
        e.preventDefault();
		this.props.createProduct(this.state);
		this.props.history.push('/');
	};
	
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
											<label htmlFor="category">Category</label>
											<input name="category" type="text" id="category" className="form-control" placeholder="Category" onChange={this.handleChange} />
										</div>

										<div className="form-label-group">
											<label htmlFor="price">Price</label>
											<input name="price" type="text" id="price" className="form-control" placeholder="Price" onChange={this.handleChange} />
										</div>
		
										<div className="form-label-group">
											<label htmlFor="description">Description</label>
											<textarea name="description" type="text" id="description" className="form-control" rows="5" placeholder="Description" required onChange={this.handleChange}></textarea>
										</div>
                                        
										<div className="form-label-group product-image">
											<label htmlFor="image">Image</label>
											<FileUploader accept="image/*"
												name="image-uploader-multiple"
												randomizeFilename
												storageRef={firebase.storage().ref("images")}
												onUploadStart={this.handleUploadStart}
												onUploadError={this.handleUploadError}
												onUploadSuccess={this.handleUploadSuccess}
												onProgress={this.handleProgress}
												multiple 
											/>

											<p>Filenames: {this.state.filenames.join(", ")}</p>

											<div>
												{this.state.downloadURLs.map((downloadURL, i) => {
												return <img key={i} src={downloadURL} alt=''/>;
												})}
											</div>
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