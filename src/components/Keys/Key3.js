import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key3 =(props) => {

        const handleClick = () => {
            props.dispatch(display(3))
        }

        return(
            <button className=" border btn btn-secondary btn-lg" style={{width:'90px'}} name="3" onClick={handleClick}>3</button>
        )
    }

export default connect()(Key3)