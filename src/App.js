import React, { Component } from 'react';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LinkedInPage from './component/LinkedInPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/linkedin" component={LinkedInPopUp} />
          <Route path="/" component={LinkedInPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;