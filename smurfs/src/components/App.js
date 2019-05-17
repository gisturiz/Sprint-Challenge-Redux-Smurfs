import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }


  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => (
          <div className="smurf-container">
            <h1>{smurf.name}</h1>
            <p>Age: {smurf.age} years old</p>
            <p>Height: {smurf.height} cm tall</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({ smurfs });

export default
  connect(
    mapStateToProps,
    { fetchSmurf }
  )(App);
