import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const KeyCloseBracket =(props) => {

        const handleClick = () => {
            props.dispatch(display(')'))
        }

        return(
            <button  className=" border btn btn-secondary btn-lg" style={{width:'50px'}}  name="closeBracket" onClick={handleClick}>)</button>
        )
    }

export default connect()(KeyCloseBracket)