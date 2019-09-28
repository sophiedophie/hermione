import * as React from 'react';
import { Lock } from 'styled-icons/material';
import { GlobalStyle } from '../config/styles';
import Header from '../components/Header';

export default () => (
  <React.Fragment>
    <GlobalStyle />
    {/* Navigation here */}
    <Header />
  </React.Fragment>  
);
