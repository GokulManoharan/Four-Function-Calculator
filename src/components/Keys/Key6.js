import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key6 =(props) => {

        const handleClick = () => {
            props.dispatch(display(6))
        }

        return(
            <button className=" border btn btn-secondary btn-lg" style={{width:'90px'}} name="6" onClick={handleClick}>6</button>
        )
    }

export default connect()(Key6)