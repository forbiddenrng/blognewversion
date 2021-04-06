import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import './Travel.css'
class Travel extends Component {
  render() {
    const imgs = this.props.img.map(img => {
      return <img src={img} alt={img} key={img} />
    })
    console.log(imgs)


    return (
      <div className="travel">
        <div className="travel_data">
          <h4>Autor: <span>Antek Gawron</span></h4>
          <p>Miejsce: Gdynia</p>
        </div>
        <div className="travel_desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum adipisci recusandae molestiae? Laudantium eum aut commodi quam, veniam dicta odio obcaecati, dignissimos minima at, expedita quod reprehenderit sequi officiis!</p>
          <div className="images_container">
            <SRLWrapper>
              {imgs}
            </SRLWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default Travel;