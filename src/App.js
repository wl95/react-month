import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter,
  Route,
  Link,
  IndexRoute,
  Switch,
  Redirect
} from 'react-router-dom';
import routerDate from './router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            routerDate.routers.map((value, index) => {
              return <Route path={value.path} key={value.name} render={location => {
                return <value.component  {...location} routerState={value.children}/>
              }}/>
            })
          }  
          <Redirect from="/" to="/starte"/>
        </Switch>  
      </BrowserRouter>  
    );
  }
}

export default App;
