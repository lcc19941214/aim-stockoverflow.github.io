import React, { Component, PropTypes } from 'react';
import { Carousel } from 'antd';

const CarouselData = [
  {
    "title": "首页轮播图1",
    "alt": "eg-1",
    "id": 1,
    "src": require('images/slides/slide_1.png')
  },
  {
    "title": "首页轮播图2",
    "alt": "eg-2",
    "id": 2,
    "src": require('images/slides/slide_2.png')
  }
];

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
