import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Container from './components/container';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notFound';

const rootRoute = [
  {
    path: '/',
    component: Container,
    childRoutes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/about',
        component: About
      },  
    ]
  }, {
    path: '*',
    component: NotFound
  }
];

render(
	<Router history={browserHistory} routes={rootRoute} />,
	document.getElementById('root')
);