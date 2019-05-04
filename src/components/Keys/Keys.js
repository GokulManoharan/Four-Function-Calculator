import React from 'react'

import Key from './Key'
import KeyDot from './KeyDot'
import KeyPlus from './KeyPlus'
import KeyMinus from './KeyMinus'
import KeyMultiple from './KeyMultiple'
import KeyDiv from './KeyDiv'
import KeyEqual from './KeyEqual'
import KeyClear from './KeyClear'
import KeyBackSpace from './KeyBackSpace'
import KeyOpenBracket from './KeyOpenBracket'
import KeyCloseBracket from './KeyCloseBracket'

const Keys = () => {
        return (
            <>
                 <div className = " row ">
                    <div className="col-md-3 ">
                        <KeyClear />
                    </div>
                    <div className="col-md-3 ">
                        <KeyBackSpace />
                    </div>
                    <div className="col-md-3 ">
                        <KeyOpenBracket />
                    </div>
                    <div className="col-md-3 ">
                        <KeyCloseBracket />
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-3 ">
                        <Key value="1" />
                    </div>
                    <div className="col-md-3">
                         <Key value="2" />
                    </div>
                    <div className="col-md-3">
                         <Key value="3" />
                    </div>
                    <div className="ml-3">
                       <KeyPlus />
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-3">
                       <Key value="4" />
                    </div>
                    <div className="col-md-3">
                       <Key value="5" />
                    </div>
                    <div className="col-md-3">
                         <Key value="6" />
                    </div>
                    <div className="col-md-3">
                        <KeyMinus />
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-3">
                         <Key value="7" />
                    </div>
                    <div className="col-md-3">
                        <Key value="8" />
                    </div>
                    <div className="col-md-3">
                         <Key value="9" />
                    </div>
                    <div className="col-md-3">
                        <KeyMultiple />
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-3">
                          <KeyDot />
                    </div>
                    <div className="col-md-3">
                         <Key value="0" />
                    </div>
                    <div className="col-md-3">
                          <KeyEqual />
                    </div>
                    <div className="col-md-3">
                         <KeyDiv />
                    </div>
                </div>
               
            </>
        )
    }

export default Keys