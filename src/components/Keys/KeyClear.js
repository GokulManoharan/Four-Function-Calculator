import React from 'react'
import {connect} from 'react-redux'

import {clear} from '../../actions/calc'

const KeyClear =(props) => {

        const handleClick = () => {
            props.dispatch(clear())
        }

        return(
            <button  className=" border btn btn-secondary btn-lg" style={{width:'90px'}}  name="C" onClick={handleClick}>C</button>
        )
    }

export default connect()(KeyClear)