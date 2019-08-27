import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children?: any;
}

const Header = styled.div`
  font-size: 1.5em;
  // text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 3em;
  background: papayawhip;
`;

export default (props) => (
  <Wrapper>
    <Header>
      {props.children}
    </Header>
  </Wrapper>
);
