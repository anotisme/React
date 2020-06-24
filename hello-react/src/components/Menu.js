import React from 'react';
import './../styles/Menu.css';

function Menu() {
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
                        <a className="nav-link" href="/">Shop</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a className="dropdown-item" href="/">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Separated link</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  );
}

export default Menu;
