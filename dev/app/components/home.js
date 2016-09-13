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
      <div className="home-wrapper">
        <div className="m-slide">
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

        <div className="content-wrapper">
          <div className="content content_1">
            <div className="content-text">
              <h2>标题一</h2>
              <p>几句话几句话几句话几句话几句话几句话几句话几句话几句话几句话几句话几句话</p>
            </div>
            <div className="content-img">
              <img src={require('images/homeIntro/content_1.png')} alt="content_1" />
            </div>
          </div>
          <div className="content content_2">
            <div className="content-img">
              <img src={require('images/homeIntro/content_1.png')} alt="content_2" />
            </div>
            <div className="content-text">
              <h2>标题二</h2>
              <p>几句话几句话几句话几句话几句话几句话几句话几句话几句话几句话几句话几句话</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
