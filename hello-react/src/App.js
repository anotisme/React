import React, { Component } from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Login from './components/accounts/SignIn';
import Register from './components/accounts/SignUp';
import fire from './firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import './App.css';
import CreateProduct from './components/products/CreateProduct';
import ProductDetails from './components/products/ProductDetails';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
		}
	}
	componentDidMount() {
		this.authListiner();
	}
	authListiner() {
		fire.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({user});
			} else {
				this.setState({user: null});
			}
		});
	}
	render() {
		return (
			<div className="App">
				<Router>
					<Menu />
	
					<div className="content">
						<Switch>
							<Route exact path="/" component={Homepage} />
							<Route path="/create" component={CreateProduct} />
							<Route path="/product/:id" component={ProductDetails} />
							{
								this.state.user ? 
								(
									<>
									<Homepage />
									</>
								) : 
								(<>
									<Route path="/login" component={Login} />
									<Route path="/register" component={Register} />
								</>)
							}
						</Switch>
					</div>
				</Router>
	
				<Footer />
			</div>
		);
	}
}

export default App;
