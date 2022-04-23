import React, { Component } from 'react';
import './Header.css';
import logo from '../img/qx7jYSYm_400x400.jpg';
import Salutacio from './Salutacio.js';
 class Header extends Component {
  render() {
    var usuari = "Oriol";
    return(
      <h1 className="salutacio"><img src={logo} height="50px" alt="My Awesome Image"/> El teu portal de montanya.  <Salutacio nick={usuari} /> </h1>
    )
  }

}

export default Header