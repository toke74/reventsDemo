import React, {Component} from 'react';
import {Container, Responsive} from 'semantic-ui-react';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

const NavBarChildren = ({children}) => (
  <Container style={{marginTop: '5em'}}>{children}</Container>
);
const leftItems = [
  {as: 'a', content: 'Home', key: 'home'},
  {as: 'a', content: 'Users', key: 'users'},
];
const rightItems = [
  {as: 'a', content: 'Login', key: 'login'},
  {as: 'a', content: 'Register', key: 'register'},
];
class NavBar extends Component {
  state = {
    visible: false,
  };

  handlePusher = () => {
    const {visible} = this.state;

    if (visible) this.setState ({visible: false});
  };

  handleToggle = () => this.setState ({visible: !this.state.visible});

  render () {
    const {children} = this.props;
    const {visible} = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
