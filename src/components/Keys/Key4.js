import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key4 =(props) => {

        const handleClick = () => {
            props.dispatch(display(4))
        }

        return(
            <button className=" border btn btn-secondary btn-lg" style={{width:'90px'}} name="4" onClick={handleClick}>4</button>
        )
    }

export default connect()(Key4)