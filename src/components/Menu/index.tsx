import * as React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core'; 
import { Google } from 'styled-icons/boxicons-logos/Google'

interface Props {
  items?: string[];
}

const loginMethods = ['Google', 'Facebook', 'Twitter', 'Github'];
const MenuComponent: React.FC<Props> = (props) => {
  const MenuItemComponents = () => loginMethods.map(item => (
    <MenuItem key={item} text={item} />
  ));
  return (
    <Menu>
      <MenuItem icon={<Google />} text='Google' />
      <MenuItem text='Facebook' />
      <MenuItem text='Twitter' />
      <MenuItem text='Github' />
    </Menu>
  )
};

export default MenuComponent;
