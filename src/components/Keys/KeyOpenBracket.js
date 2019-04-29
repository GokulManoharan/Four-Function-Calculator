import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const KeyOpenBracket =(props) => {

        const handleClick = () => {
            props.dispatch(display('('))
        }

        return(
            <button  className=" border btn btn-secondary btn-lg" style={{width:'90px'}}  name="openBracket" onClick={handleClick}>(</button>
        )
    }

export default connect()(KeyOpenBracket)