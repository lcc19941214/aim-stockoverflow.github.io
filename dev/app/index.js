import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Container from './components/container';
import Home from './components/home';
import Production from './components/production';
import TechIntro from './components/techIntro.js';
import Team from './components/team';
import NotFound from './components/notFound';

import 'less/app.less';

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
        path:'/production',
        component:Production
      },
      {
        path: '/technology',
        component: TechIntro
      },
      {
        path: '/about',
        component: Team
      }
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