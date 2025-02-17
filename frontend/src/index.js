import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App.js';
import WaitlistPage from './pages/waitlist';
import HowItWorksPage from './pages/how-it-works';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/waitlist" component={WaitlistPage} />
        <Route path="/how-it-works" component={HowItWorksPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
