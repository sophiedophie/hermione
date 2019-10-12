import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Lock } from 'styled-icons/material';

import client from '../graphql';
import { GlobalStyle } from '../config/styles';
import Header from '../components/Header';
import Editor from '../components/Editor';

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
    <ApolloProvider client={client}>
      <Router>
        <Switch>
        <Header />
          <RouteComponent path='/library' component={<p>this is library</p>} />
          <RouteComponent path='/log' component={<Editor />} />
          <RouteComponent path='/search' component={<p>search page~~</p>} />
        </Switch>
      </Router>
    </ApolloProvider>
  </React.Fragment>  
);
