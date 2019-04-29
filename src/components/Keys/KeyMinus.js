import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const KeyMinus =(props) => {

        const handleClick = () => {
            props.dispatch(display('-'))
        }

        return(
            <button className=" border btn btn-secondary btn-lg" style={{width:'70px'}} name="-" onClick={handleClick}>-</button>
        )
    }

export default connect()(KeyMinus)