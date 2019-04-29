import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key0 =(props) => {

        const handleClick = () => {
            props.dispatch(display('0'))
        }

        return(
            <button className=" border btn btn-secondary btn-lg" style={{width:'90px'}}  name="0" onClick={handleClick}>0</button>
        )
    }

export default connect()(Key0)