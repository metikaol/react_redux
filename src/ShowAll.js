import React, { Component } from 'react';
import {connect} from 'react-redux'
import { loadData } from './actions'
import Edit from './Edit'
import Show from './Show'
import { comment } from 'postcss';
class ShowAll extends Component {

    componentDidMount() {
        loadData(this.props.dispatch)
    }

    render(){
        const{ datas } = this.props
        console.log("data on show all", datas)
        return(
            <div>
                <h1> All Comments</h1>
                {/* { datas.map(data => <Show key={data.id} data={data} dispatch={this.props.dispatch}/>)} */}
                {datas.map((data)=> (
                    <div key={data.id}>
                        {data.editing 
                        ? 
                        <Edit data={data} key={data.id} /> 
                        :
                        <Show key={data.id} data={data}/>}
                    </div>
                ))}
            </div>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        datas: state.data
    }
}

export default connect(mapStateToProps)(ShowAll)