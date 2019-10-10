import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Lock } from 'styled-icons/material';
import { GlobalStyle } from '../config/styles';
import Header from '../components/Header';

interface RouterProps {
  path: string;
  component: React.ReactNode;
}

const RouteComponent: React.FC<RouterProps> = (props) => (
  <Route path={props.path}>
    { props.component }
  </Route>
);

export default () => (
  <React.Fragment>
    <GlobalStyle />
    {/* Navigation here */}
    <Router>
      <Header />
      <Switch>
        <RouteComponent path='/log' component={<p>this is log</p>} />
        <RouteComponent path='/search' component={<p>search page~~</p>} />
      </Switch>

    </Router>
  </React.Fragment>  
);
