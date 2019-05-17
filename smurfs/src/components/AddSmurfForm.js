import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class AddSmurfForm extends Component {

    state = {
        smurfs: {
            name: '',
            age: '',
            height:''
        }
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.createSmurf(this.state.smurfs);
        this.setState({
            name: '',
            age: '',
            height: ''
          });
    }
    handleInputChange = e => {
        this.setState({ 
            smurfs: {
                ...this.state.smurfs,
            [e.target.name]: e.target.value
            }
        });
      };

    render() {
        return (
            <div>
                <h3>Add A New Smurf</h3>
                <form onSubmit={this.addSmurf}>
                    <input 
                    type="text" 
                    onChange={this.handleInputChange}
                    value={this.state.smurfs.name}
                    name="name"
                    placeholder="Name"
                    />
                    <input 
                    type="text" 
                    onChange={this.handleInputChange}
                    value={this.state.smurfs.age}
                    name="age"
                    placeholder="Age"
                    />
                    <input 
                    type="text" 
                    onChange={this.handleInputChange}
                    value={this.state.smurfs.height}
                    name="height"
                    placeholder="Height"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ smurfs }) => ({
    smurfs
});

export default
    connect(
        mapStateToProps,
        { createSmurf }
    )(AddSmurfForm);