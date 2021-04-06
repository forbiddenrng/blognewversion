import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Travel from './components/Travel'
import imagesArray from './images'
import background from './img/two.jpg'

class App extends Component {
  render() {
    const travels = [
      { author: 'Antek Gawron', place: 'Gdynia', description: 'lorem ipsum dolor sit amet', src: [...imagesArray.gawronA] }
    ]

    return (
      <div className="App">
        <Header img={background} />
        <About />
        <h2>Nasze podróże</h2>
        <section className="travels">
          <Travel img={travels[0].src} />
        </section>
      </div>
    );
  }
}

export default App;
