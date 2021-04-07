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
      { author: 'Antek Gawron', place: 'Gdynia', descriptionPL: 'to jest wersja po polsku - test', descriptionEN: 'this is an english version - test', src: [...imagesArray.gawronA] },
      { author: 'Antek Gawron', place: 'Sandomierz', descriptionPL: 'to jest wersja po polsku - test Sandomierz', descriptionEN: 'this is an english version - test Sandomierz', src: [...imagesArray.gawronA] },
    ]
    const travelSection = travels.map((travel, index) => {
      return <Travel data={travel} key={index} />
    })
    return (
      <div className="App">
        <Header img={background} />
        <About />
        <h2>Nasze podróże</h2>
        <section className="travels">
          {/* <Travel img={travels[0].src} /> */}
          {travelSection}
        </section>
      </div>
    );
  }
}

export default App;
