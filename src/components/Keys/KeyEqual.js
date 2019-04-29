import React from 'react'
import {connect} from 'react-redux'

import {display, update} from '../../actions/calc'

const KeyEqual =(props) => {

        const handleClick = () => {
            const {values} = props
            let result, operator
            for(let i=0 ; i<props.values.length ; i++){
                if(values[i] == '+' || values[i] == '-' || values[i] == '*' || values[i] == '/' ){
                    operator = values[i]
                }
                else{

                }
            }
            if(operator == '+') {
                result = (Number(values.split(operator)[0]) + Number(values.split(operator)[1]))
            }
            if(operator == '-') {
                result = (Number(values.split(operator)[0]) - Number(values.split(operator)[1]))
            }
            if(operator == '*') {
                result = (Number(values.split(operator)[0]) * Number(values.split(operator)[1]))
            }
            if(operator == '/') {
                result = (Number(values.split(operator)[0]) / Number(values.split(operator)[1]))
            }

            props.dispatch(update(result))
            
        }

        return(
            <button className=" border btn btn-primary btn-lg" style={{width:'90px'}}  name="=" onClick={handleClick}>=</button>
        )
    }

const mapStateToProps = (state,props) => {
    return ({
        values : state
    })
}

export default connect(mapStateToProps)(KeyEqual)