import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Travel from './components/Travel'
import imagesArray from './images'
import background from './img/two.jpg'

class App extends Component {
  state = {
    inputValue: "",
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }
  render() {
    const travels = [
      { author: 'Antek Gawron', place: 'Gdynia', descriptionPL: 'to jest wersja po polsku - test', descriptionEN: 'this is an english version - test', src: [...imagesArray.gawronA] },
      { author: 'Antek Gawron', place: 'Sandomierz', descriptionPL: 'to jest wersja po polsku - test Sandomierz', descriptionEN: 'this is an english version - test Sandomierz', src: [...imagesArray.gawronA] },
    ]
    const travelsToDisplay = travels.filter(travel => {
      return travel.place.toLocaleLowerCase().includes(this.state.inputValue.toLocaleLowerCase())
    })
    console.log(travelsToDisplay)
    const travelSection = travelsToDisplay.map((travel, index) => {
      return <Travel data={travel} key={index} />
    })

    return (
      <div className="App">
        <Header img={background} change={this.changeState} />
        <About />
        <div className="browser">
          <h2>Nasze podróże</h2>
          <div>
            <input value={this.state.inputValue} onChange={this.handleInputChange} type="text" placeholder="Szukaj miejsc" />
          </div>
        </div>
        <section className="travels">
          {/* <Travel img={travels[0].src} /> */}
          {travelSection.length ? travelSection : <p className="error">Jeszcze tu nie byliśmy :(</p>}
        </section>
      </div>
    );
  }
}

export default App;
