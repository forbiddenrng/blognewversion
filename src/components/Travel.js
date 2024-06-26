import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import './Travel.css'
import SimpleReactLightbox from 'simple-react-lightbox'
class Travel extends Component {
  state = {
    isEnglish: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isEnglish: !this.state.isEnglish
    })
  }
  render() {
    const { place, description, src } = this.props.data;
    let imgs;
    if (src) {
      imgs = src.map(img => {
        return <img src={img} alt={img} key={img} />
      })
    }
    // const imgs = src.map(img => {
    //   return <img src={img} alt={img} key={img} />
    // })
    return (
      <div className="travel">
        <div className="travel_data">
          <p>Place: <b>{place}</b></p>
        </div>
        <div className="travel_desc">
          {/* <div className="input">
            <label htmlFor="version">en</label>
            <input type="checkbox" value={this.state.isEnglish} name="version" id="version" onChange={this.handleCheckboxChange} />
          </div> */}
          <p>
            {description}
          </p>
          <div className="images_container">
            <SimpleReactLightbox>
              <SRLWrapper>
                {imgs}
              </SRLWrapper>
            </SimpleReactLightbox>
          </div>
        </div>
      </div>
    );
  }
}

export default Travel;