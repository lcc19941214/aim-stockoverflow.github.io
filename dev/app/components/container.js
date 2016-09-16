import React, { Component, PropTypes } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import Home from './home';

const NavigationData = require('data/navigationData');
const MenuItem = Menu.Item;
const FooterData = {
  'owner': {
    "title": "项目负责人",
    "member": "欧阳彤林"
  },
  'theory': {
    "title": "理论团队",
    "member": "欧阳彤林 解海天 周文宇 吴小曼"
  },
  'tech': {
    "title": "技术团队",
    "member": "傅永健 刘天威 李云 崔鹏蔚 刘承川 甄怡 刘佳派 黄慧娟"
  }
};

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="g-header">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img alt="aim-logo" src={require('images/logo/logo.png')} />
              </Link>
            </div>
            <div className="navigation">
              <Menu mode="horizontal">
                {
                  NavigationData.map((item, index) =>
                    <MenuItem key={index}>
                      <Link to={item.link}>{item.text}</Link>
                    </MenuItem>)
                }
              </Menu>
            </div>
          </div>
        </div>

        <div className="g-content">
          {this.props.children || <Home />}
        </div>

        <div className="g-footer">
          <div className="footer-wrapper">
            <ul>
              <li>
                <div className="logo"></div>
              </li>
              {
                Object.keys(FooterData).map((key, idx) =>
                  <li key={idx}>
                    <h4>{FooterData[key].title}</h4>
                    <p>{FooterData[key].member}</p>
                  </li>)
              }
            </ul>
          </div>
          <div className="copyright">
            <p>Copyright © 2016 The Project by <span>stockoverflow</span>. All Rights Reserved</p>
          </div>
        </div>
      </div>
    );
  }
}
