import * as React from 'react';
import { Navbar, Alignment, Button, Popover } from '@blueprintjs/core'; 
import Menu from '../Menu';
import './index.scss';

interface Props {
  children?: any;
  loginModal?: any;
}

const className = 'bp3-minimal';

export default (props) => (
  <Navbar>
    <Navbar.Group className='align-flex'>
        <Navbar.Heading>Hermione</Navbar.Heading>
        <Navbar.Divider />
        <div className="bp3-input-group .modifier">
          <span className="bp3-icon bp3-icon-search"></span>
          <input type="text" className="bp3-input" placeholder="Search" />
          <button className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right" ></button>
        </div>
        <div className='margin-left-auto'>
          <Popover content={<Menu />}>
            <Button className={className} icon="log-in" text="Login" />
          </Popover>
        </div>
    </Navbar.Group>
</Navbar>
);
