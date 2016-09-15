import React, { Component, PropTypes } from 'react';
import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
}
export default class Team extends Component {
    render() {
        return (
            <Carousel afterChange={onChange}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
    );
    }
}

/*function onChange(a, b, c) {
    console.log(a, b, c);
}
export default class Team extends Component {
    ReactDOM.render(
      <Carousel afterChange = {onChange} >
        < div > < h3 > 1 < / h3 > < / div >
        < div > < h3 > 2 < / h3 > < / div >
        < div > < h3 > 3 < / h3 > < / div >
        < div > < h3 > 4 < / h3 > < / div >
      </Carousel >
,mountNode);
}*/
/*
export default class Team extends Component {
    render(){
        return(
            <div className="home-wrapper">
                <div className="m-slide">
                    <Carousel autoplay>
                </div>
            </div>

        )
    }
}*/
