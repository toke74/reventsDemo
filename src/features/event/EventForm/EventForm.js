import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan,
} from 'revalidate';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectIput from '../../../app/common/form/SelectIput';
import DateIput from '../../../app/common/form/DateIput';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }

  return {
    initialValues: event,
  };
};

const mapDispatchToProps = {
  createEvent,
  updateEvent,
};

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' },
];

const validate = combineValidators({
  title: isRequired({ message: 'The event title is required' }),
  category: isRequired({ message: 'The category  is required' }),
  description: composeValidators(
    isRequired({ message: 'Please enter a description' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters',
    })
  )(),
  city: isRequired('City'),
  venue: isRequired('Venue'),
  date: isRequired('Date'),
});

class EventForm extends Component {
  onFormSubmit = (values) => {
    console.log(values)
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob',
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
    const {
      initialValues,
      history,
      invalid,
      submitting,
      pristine,
    } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete="off"
            >
              <Field
                name="title"
                component={TextInput}
                placeholder="Give your event a name"
                type="text"
              />
              <Field
                name="category"
                component={SelectIput}
                options={category}
                placeholder="What is your event about?"
                type="text"
              />
              <Field
                name="description"
                component={TextArea}
                placeholder="Tell us about your event"
                rows={3}
                type="text"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                component={TextInput}
                placeholder="Event city"
                type="text"
              />
              <Field
                name="venue"
                component={TextInput}
                placeholder="Event venue"
                type="text"
              />
              <Field
                name="date"
                component={DateIput}
                dateFormat="dd LLL yyyy h:mm a"
                showTimeSelect
                timeFormat="HH:mm"
                placeholder="Event date"
              />

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id ? (
                    () => history.push(`/events/${initialValues.id}`)
                  ) : (
                    () => history.push('/events')
                  )
                }
                type="button"
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'eventForm', validate })(EventForm)
);
