import React from 'react'
import {connect} from 'react-redux'

const CountButtons = (props) => {
    return (
        <div>
            <button onClick={ ()=>{props.dispatch({type:'INC'})} }>INC</button>
            <button onClick={ ()=>{props.dispatch({type:'DEC'})} }>DEC</button>
        </div>
    )
}

export default connect()(CountButtons)
