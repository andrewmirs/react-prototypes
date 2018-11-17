import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clock extends Component {
    render(){
        return(
            <div className="text-center mt-5">
                <h1>{this.props.time}</h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        time: state.clock.time
    }
}

export default connect(mapStateToProps)(Clock);