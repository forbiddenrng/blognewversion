import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <h1>Blog Mat Geo Ang</h1>
        </section>
        <header className="photo">
          <img src={this.props.img} alt="img" />
          <p><span>Admire the World</span></p>
          <p><span>Get inspired</span></p>
          <p><span>Welcome</span></p>
          <a href="#about">Enter</a>
        </header>
      </div>

    );
  }
}

export default Header;