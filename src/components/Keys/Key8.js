import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key8 =(props) => {

        const handleClick = () => {
            props.dispatch(display(8))
        }

        return(
            <button  className=" border btn btn-secondary btn-lg" style={{width:'90px'}} name="8" onClick={handleClick}>8</button>
        )
    }

export default connect()(Key8)