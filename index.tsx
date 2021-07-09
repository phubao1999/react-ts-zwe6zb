import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      data: 'John Doe',
      shouldRenderDumbmy: true
    };
  }

  componentWillMount() {
    console.log('Component will mount!');
  }
  componentDidMount() {
    console.log('Component did mount!');
  }

  render() {
    const domDynamic = this.domRenderDinamic();
    const numbers = [1, 2, 3, 4, 5];
    const numberDOM = numbers.map(number => (
      <li key={number.toString()}>{number}</li>
    ));
    return (
      <div>
        {domDynamic}
        <Hello name={this.state.name} />
        <p>{this.state.data}</p>
        <p>Start editing to see some magic happen :)</p>
        {numberDOM}
      </div>
    );
  }

  domRenderDinamic() {
    if (this.state.shouldRenderDumbmy) {
      return <p>Dumb DOM</p>;
    }
    return;
  }
}

render(<App />, document.getElementById('root'));
