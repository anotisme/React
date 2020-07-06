import React from "react";
import firebase from './../../firebase';
import './../../styles/SignIn.css';

class SignUp extends React.Component{
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: ''
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSignUp = (e) => {
		e.preventDefault();
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
		.catch((error) => {
			alert(error);
		});
	}
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
							<div className="card card-signin my-5">
								<div className="card-body">
									<h5 className="card-title text-center">Sign Up</h5>
									<form className="form-signin" onSubmit={this.handleSignUp}>
										<div className="form-label-group">
											<label htmlFor="email">Email address</label>
											<input name="email" type="email" id="email" className="form-control" placeholder="Email address" required autoFocus onChange={this.handleChange} />
										</div>
		
										<div className="form-label-group">
											<label htmlFor="inputPassword">Password</label>
											<input name="password" type="password" id="password" className="form-control" placeholder="Password" required onChange={this.handleChange} />
										</div>
                                        
										<div className="form-label-group">
											<label htmlFor="firstName">First Name</label>
											<input name="firstName" type="text" id="firstName" className="form-control" placeholder="First Name" onChange={this.handleChange} />
										</div>
                                        
										<div className="form-label-group">
											<label htmlFor="lastName">Last Name</label>
											<input name="lastName" type="text" id="lastName" className="form-control" placeholder="Last Name" onChange={this.handleChange} />
										</div>
										<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign Up</button>
										<hr className="my-4" />
										<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign Up with Google</button>
										<button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign Up with Facebook</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

export default SignUp;