import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const KeyMultiple =(props) => {

        const handleClick = () => {
            props.dispatch(display('*'))
        }

        return(
            <button className="border btn btn-secondary btn-lg" style={{width:'70px'}} name="*" onClick={handleClick}>x</button>
        )
    }

export default connect()(KeyMultiple)