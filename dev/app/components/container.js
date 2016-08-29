import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router';
import Home from './home';

const NavigationData = require('data/navigationData');

const MenuItem = Menu.Item;

class Navigation extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        {
          NavigationData.map((item, index) =>
            <MenuItem key={index}>
              <Link to={item.link}>{item.text}</Link>
            </MenuItem>)
        }
      </Menu>
    );
  }
}

export default class Container extends Component {
  render() {
    return (
      <section>
        <QueueAnim
          type={['bottom','top']} delay={200}
          className="header">
          <Navigation />
        </QueueAnim>

        <QueueAnim
          className="container"
          type={['bottom','top']} delay={200}>
          {this.props.children || <Home />}
        </QueueAnim>
      </section>
    );
  }
}
