import React, { Component } from 'react';
import './Header.css'
class Header extends Component {

  render() {
    return (
      <section className="header">
        <p>Blog 2D</p>
        <div>
          <input type="text" placeholder="Szukaj..." />
        </div>
      </section>
    );
  }
}

export default Header;