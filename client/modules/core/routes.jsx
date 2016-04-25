import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const publicRoutes = FlowRouter.group({name: 'public'});
  const authenticatedRoutes = FlowRouter.group({name: 'authenticated'});

  publicRoutes.route('/', {
      name: 'home',
      action() {
          mount(MainLayoutCtx, {
              content: () => (<Home/>)
          });
      }
  });

  publicRoutes.route('/login', {
    name:'login',
      action() {
          mount(MainLayoutCtx, {
              content: () => (<Login/>)
          });
      }
  });
}
