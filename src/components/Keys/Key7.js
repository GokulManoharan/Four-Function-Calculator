import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key7 =(props) => {

        const handleClick = () => {
            props.dispatch(display(7))
        }

        return(
            <button className=" border btn btn-secondary btn-lg" style={{width:'90px'}} name="7" onClick={handleClick}>7</button>
        )
    }

export default connect()(Key7)