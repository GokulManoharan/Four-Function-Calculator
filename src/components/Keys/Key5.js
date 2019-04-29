import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key5 =(props) => {

        const handleClick = () => {
            props.dispatch(display(5))
        }

        return(
            <button className=" border btn btn-secondary btn-lg" style={{width:'90px'}} name="5" onClick={handleClick}>5</button>
        )
    }

export default connect()(Key5)