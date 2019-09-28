import * as React from 'react';
import Menu from '../../components/Menu';

interface Props {

}

const loginMethods = ['Google', 'Facebook', 'Twitter', 'Github'];

const Login: React.FC<Props> = (props) => {
  return (
    <Menu
      items={loginMethods}
    />
  );
};

export default Login;
