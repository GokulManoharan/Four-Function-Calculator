import React from 'react'

import { connect } from 'react-redux'

const Result = (props) => {
    return (
        <p className=" alert alert-secondary display-4">{ props.result ? props.result : 0}</p>
   )
}

const mapStateToProps = (state) => {
    return ({
        result : state
    })
}

export default connect(mapStateToProps)(Result)