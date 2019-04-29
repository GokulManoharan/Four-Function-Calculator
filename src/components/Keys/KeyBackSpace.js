import React from 'react'
import {connect} from 'react-redux'

import {backSpace} from '../../actions/calc'

const KeyBackSpace =(props) => {

        const handleClick = () => {
            props.dispatch(backSpace())
        }

        return(
            <button  className=" border btn btn-secondary btn-lg" style={{width:'90px'}}  name="backspace" onClick={handleClick}>CE</button>
        )
    }

export default connect()(KeyBackSpace)