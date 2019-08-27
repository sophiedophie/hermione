import * as React from 'react';
import { Lock } from 'styled-icons/material';
import { GlobalStyle } from '../config/styles';
import Header from '../components/Header';
import InputBox from '../components/InputBox';

export default () => (
  <React.Fragment>
    <GlobalStyle />
    {/* Navigation here */}
    <Header>
      <InputBox text='wtf' Icon={<Lock />} />
    </Header>
  </React.Fragment>  
);
