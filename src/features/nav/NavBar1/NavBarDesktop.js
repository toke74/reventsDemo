import React from 'react';
// import _ from 'lodash';
import {Menu, Button, Container} from 'semantic-ui-react';

const NavBarDesktop = ({leftItems, rightItems}) => (
  <Menu fixed="top" inverted>
    <Container>
      {/* <Menu.Item>
      <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>
    {_.map(leftItems, (item) => <Menu.Item {...item} />)} */}

      <Menu.Item header as="a">
        <img src="assets/logo.png" alt="logo" />

        Re-vents
      </Menu.Item>
      {/* <Menu.Item as="a">Re-vents</Menu.Item> */}
      <Menu.Item as="a">Event</Menu.Item>
      <Menu.Item as="a">
        <Button floated="right" positive inverted content="Create Event" />
      </Menu.Item>
      {/* <Menu.Menu position="right">
        {_.map(rightItems, (item) => <Menu.Item {...item} />)}
      </Menu.Menu> */}
      <Menu.Item position="right">
        <Button basic inverted content="Login" />
        <Button
          basic
          inverted
          content="Sign Out"
          style={{marginLeft: '0.5em'}}
        />
      </Menu.Item>
    </Container>
  </Menu>
);

export default NavBarDesktop;
