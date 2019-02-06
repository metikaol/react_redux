import React, { Component } from 'react';
import {connect} from 'react-redux'

class Edit extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newMessage = this.getMessage.value
        const data = {
            newName,
            newMessage,
        }
        this.props.dispatch({
            type: 'UPDATE_DATA',
            id: this.props.data.id,
            data
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input required trype="text" placeholder="Enter Data" ref={(input)=>this.getName = input} defaultValue={this.props.data.name} /> <br /> <br />
                    <textarea required rows="5" cols="28" placeholder="message" ref={(input)=>this.getMessage = input} defaultValue={this.props.data.message}/> <br/> <br />
                    <button>Update</button>
                </form>
            </div>
        )    
    }
}

export default connect()(Edit)