import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key9 =(props) => {

        const handleClick = () => {
            props.dispatch(display(9))
        }

        return(
            <button className=" border btn btn-secondary btn-lg" style={{width:'90px'}} name="9" onClick={handleClick}>9</button>
        )
    }

export default connect()(Key9)