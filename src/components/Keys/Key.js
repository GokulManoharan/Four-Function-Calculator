import React from 'react'
import {connect} from 'react-redux'

import {display} from '../../actions/calc'

const Key =(props) => {

        const handleClick = () => {
            props.dispatch(display(props.value))
        }

        return(
            <button className="border btn btn-secondary btn-lg" style={ (props.type && props.col) ? {width:'70px'} : {width:'90px'}}  name={props.value} onClick={handleClick}>{props.value}</button>
        )
    }

export default connect()(Key)