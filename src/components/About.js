import React from 'react';
import './About.css'
import clas from '../img/clas.jpg'
console.log(clas);
const About = () => {
  return (
    <section className="about" id="about">
      <h3>About us</h3>
      <div className="content">
        <p>
          Hello!  <br /><br />
      We are students from X LO in Gdynia. We extend geography, maths and English in our profile which means we focus on these subjects. Many of us have chosen this profile because of the love to travel. In this blog we would like to share our experience from travelling to various areas. Also we described places we have been to, so that you can get to know them better. We hope to get as many people interested in traveling as possible. We wish to encourage you to visit some of the places we have depicted and discover the marvelous planet that we live on. As the pandemy is approaching its end, soon we will be able to set out on a new journey so why not learn about possible travel destinations right now.
      <br /><br />
      Enjoy reading!
      </p>
        <div className="class_photo">
          <img src={clas} alt="Our clasks" />
        </div>
      </div>
    </section>
  );
}

export default About;