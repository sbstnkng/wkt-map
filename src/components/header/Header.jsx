import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header.module.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/" className={`${styles.navbarBrand} align-middle`}>
        <i className="fas fa-map-marked fa-2x"></i>
        <span>WKT Map</span>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="https://github.com/sbstnkng/wkt-map" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
