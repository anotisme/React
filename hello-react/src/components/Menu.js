import React from 'react';
import fire from './../firebase';
import './../styles/Menu.css';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
        }
        this.logOut = this.logOut.bind(this);
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
    logOut() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="menu">
                <div className="container">
                    <div className="sh-table-cell sh-group">
                        <div className="header-logo sh-group-equal">
                            <a href="/" className="header-logo-container sh-table-small" rel="home">
                                <div className="sh-table-cell">
                                    <img className="sh-standard-logo" src="//cdn.jevelin.shufflehound.com/wp-content/uploads/2016/05/Je_Logo_black_big.png" alt="Jevelin Theme" height="30" />
                                </div>
                            </a>
                        </div>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/create">Create Product</a>
                            </li>
                            {
                                this.state.user ?
                                (<>
                                <li className="btn-group nav-item">
                                    <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.user.email}
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" onClick={() => fire.auth().signOut()}>Logout</a>
                                    </div>
                                </li>
                                </>) : 
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/register">Register</a>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
