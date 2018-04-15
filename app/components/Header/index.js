import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <Link className="logo" to="/">FFFS Breeder</Link>
        <div className="nav-bar">
          <Link className="router-link" to="/login">Zaloguj</Link>
          <Link className="router-link" to="/register">Zarejestruj</Link>
        </div>
      </div>
    );
  }
}

export default Header;
