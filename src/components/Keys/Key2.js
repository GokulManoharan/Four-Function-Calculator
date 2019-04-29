import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key2 =(props) => {

        const handleClick = () => {
            props.dispatch(display(2))
        }

        return(
            <button className="border btn btn-secondary btn-lg" style={{width:'90px'}} name="2" onClick={handleClick}>2</button>
        )
    }

export default connect()(Key2)