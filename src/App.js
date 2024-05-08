import { Component } from 'react'
import './App.css';
import Navbar from './component/Navbar';

export default class App extends Component {
  state = {
    name: "diyouf",
    place: "tirur",
    count: 0
  }

  handleStateData = () => {
    this.setState({
      name: "john",
    })
  }

  increase = () => {
    this.setState(last => ({
      count: last.count + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <button onClick={this.handleStateData}>Change Name</button>
        <Navbar name={this.state.name} />
        <button onClick={this.increase}>Increase</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}