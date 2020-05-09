import React, {Component, Fragment} from 'react';
import {Container} from 'semantic-ui-react';
import {Route, withRouter, Switch} from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar/Navbar';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage
  from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard
  from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage
  from '../../features/user/UserDetailed/UserDetailedPage';
import SettingDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/testArea/TestComponent';
import ModalManager from '../../features/modals/ModalManager';

class App extends Component {
  render () {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <ModalManager />
              <Navbar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingDashboard} />
                  <Route
                    path={['/createEvent', '/manage/:id']}
                    component={EventForm}
                  />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter (App);
