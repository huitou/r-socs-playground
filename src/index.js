import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { object } from 'prop-types';

import { connect } from 'r-socs-core';
import { ObjectModel } from 'r-obj-model';

const modelName = 'myObjectModel';
const myObjStr = JSON.stringify({ addedStuff: 'addedStuff' });

class TargetComponent extends Component {
  render() {
    return (
      <div>
        <div>Target Component</div>
        <div>hifu:</div>
        <div>{JSON.stringify(this.props[modelName].hifu)}</div>
        <div>hefu:</div>
        <div>
          <button onClick={() => this.props[modelName].hefu.change(JSON.parse(myObjStr))}>change</button>
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
