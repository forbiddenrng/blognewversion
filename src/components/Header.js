import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <h1>Blog 2D</h1>
        </section>
        <header className="photo">
          <img src={this.props.img} alt="img" />
          <p><span>Podziwiaj świat</span></p>
          <p><span>Zainspiruj się</span></p>
          <p><span>Witaj na blogu</span></p>
          <a href="#about">Wchodzę</a>
        </header>
      </div>

    );
  }
}

export default Header;