import React, { Component } from 'react';
import './Counter.css'; 

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-title">Counter App</h1>
        <h2 className="counter-number">{this.state.count}</h2>
        <div>
          <button className="counter-button" onClick={this.increment}>Increment</button>
          <button className="counter-button" onClick={this.decrement}>Decrement</button>
          <button className="counter-button" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
