import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Home from './home';

export default class Container extends Component {
  render() {
    return (
      <section>
        <div className="header">
          <Link to="/home">home</Link>
          <Link to="/about">about</Link>
        </div>

        <div className="container">
          {this.props.children || <Home />}
        </div>
      </section>
    );
  }
}
