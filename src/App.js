import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Travel from './components/Travel'
import imagesArray from './images'

class App extends Component {
  render() {
    const travels = [
      { author: 'Antek Gawron', place: 'Gdynia', description: 'lorem ipsum dolor sit amet', src: [...imagesArray.gawronA] }
    ]

    return (
      <div className="App">
        <Header />
        <About />
        <section className="travels">
          <Travel img={travels[0].src} />
        </section>
      </div>
    );
  }
}

export default App;
