import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key1 =(props) => {

        const handleClick = () => {
            props.dispatch(display(1))
        }

        return(
            <button className="border btn btn-secondary btn-lg" style={{width:'90px'}} name="1" onClick={handleClick}>1</button>
        )
    }

export default connect()(Key1)