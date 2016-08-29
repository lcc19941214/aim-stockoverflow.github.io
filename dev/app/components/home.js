import React, { Component, PropTypes } from 'react';
import { Carousel } from 'antd';

const CarouselData = require('data/carouselData');

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="g-home-content">
          <div className="m-home-slide">
            <Carousel autoplay>
              {
                CarouselData.map((item, index) =>
                  <div key={index}>
                    <img src={item.src} alt={item.alt} style={{ width: "400px" }}/>
                  </div>
                )
              }
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}
