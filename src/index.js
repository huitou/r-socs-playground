import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { object } from 'prop-types';

import { connect } from 'r-socs-core';
import { ObjectModel } from 'r-obj-model';

const modelName = 'myObjectModel';

class TargetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <div>Target Component</div>
        <div>hifu:</div>
        <div>{JSON.stringify(this.props[modelName].hifu)}</div>
        <div>hefu:</div>
        <div>
          <textarea
            rows="5"
            cols="33"
            placeholder="Please write your JSON string here ..."
            value={this.state.value} onChange={this.handleChange}
          />
          <button onClick={() => this.props[modelName].hefu.change(JSON.parse(this.state.value))}>change</button>
        </div>
        <div>
          <button onClick={() => this.props[modelName].hefu.reset()}>reset</button>
        </div>
      </div>

    );
  }
}

TargetComponent.propTypes = {
  [modelName]: object.isRequired,
};

const ServicedComponent = connect(ObjectModel, modelName)(TargetComponent);

const Index = () => {
  return (
    <div>
      <div>Welcome to r-socs-playground!</div>
      <ServicedComponent initial={{ whatever: 'whatever'}}/>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
