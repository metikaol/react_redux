import React, { Component } from 'react';
import {connect} from 'react-redux'
import { saveData } from './actions'
class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const message = this.getMessage.value
        const data = {
            name,
            message,
            editing: false
        }
        this.getName.value = "";
        this.getMessage.value = "";
        saveData(data, this.props.dispatch)
    }


    render(){
        return(
            <div>
                <h1> Add Data</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required trype="text" placeholder="Enter Data" ref={(input)=>this.getName = input} /> <br /> <br />
                    <textarea required rows="5" cols="28" placeholder="message" ref={(input)=>this.getMessage = input}/> <br/> <br />
                    <button>Submit</button>
                </form>
            </div>
        )    
    }
}

export default connect()(Form)