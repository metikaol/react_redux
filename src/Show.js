import React, { Component } from 'react';
// import { deleteData } from './actions'
import {connect} from 'react-redux'

class Show extends Component {
    render(){
        console.log("id", this.props.data.id)
        return(
            <div>
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.message}</p>
                <p>{this.props.data.editing}</p>
                
                <button
                    onClick={()=> this.props.dispatch({type: 'EDIT_DATA', id: this.props.data.id})}
                >Edit</button>
                <button
                    // onClick = {deleteData(this.props.data.id, this.props.dispatch)}
                    onClick={()=> this.props.dispatch({type: 'DELETE_DATA', id: this.props.data.id})}
                >Delete</button>
            </div>
        )    
    }
}


export default connect()(Show)