import React from 'react';
// import _ from 'lodash';

import {
  Icon,
  Image,
  Menu,
  Sidebar,
  Segment,
  Button,
  Container,
} from 'semantic-ui-react';

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
}) => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={visible}
    >
      <Menu.Item as="a">
        <Image centered size="mini" src="assets/logo.png" />

      </Menu.Item>
      <Menu.Item as="a">Re-vents</Menu.Item>
      <Menu.Item as="a">Event</Menu.Item>
      <Menu.Item>
        <Button
          positive
          // inverted
          content="Create Event"
        />

      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{minHeight: '100vh'}}
    >
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item>
            <img src="assets/logo.png" alt="logo" />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
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
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default NavBarMobile;
