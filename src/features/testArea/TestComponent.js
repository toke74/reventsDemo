import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions';
import {Button} from 'semantic-ui-react';
import {openModal} from '../modals/modalActions';

class TestComponent extends Component {
  render () {
    const {data, incrementCounter, decrementCounter, openModal} = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is : {data}</h3>
        <Button color="green" onClick={incrementCounter}>
          Increment
        </Button>
        <Button color="red" onClick={decrementCounter}>
          Decrement
        </Button>
        <Button
          color="teal"
          onClick={() => openModal ('TestModal', {data: 42})}
        >
          Open Modal
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data,
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  openModal,
};
export default connect (mapStateToProps, mapDispatchToProps) (TestComponent);
