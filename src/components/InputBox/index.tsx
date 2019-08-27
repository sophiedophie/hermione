import * as React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  Icon?: JSX.Element;
}

const Wrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledInput = styled.input`
  padding: 3em;
  background: papayawhip;
`;

const StyledInputIconContainer = styled.span`
  color: red;
  width: 32px;
  height: 32px;
  display: block;
`;

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Input: React.FC<Props> = props => {
  const { Icon } = props;
  const iconComponent = Icon && <StyledInputIconContainer>{Icon}</StyledInputIconContainer>;
  return (
    <InputContainer>
      {iconComponent}
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default Input;
