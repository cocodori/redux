import React from 'react'
import {connect} from 'react-redux'

const CountDisplay = (props) => {
    return (
        <div>
            <h1>COUNT : {props.count} </h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    //
    return {count:state.count}
}

export default connect(mapStateToProps)(CountDisplay)
