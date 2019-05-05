import React from 'react'

import Key from './Key'
import KeyEqual from './KeyEqual'
import KeyClear from './KeyClear'
import KeyBackSpace from './KeyBackSpace'

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
                        <Key value="(" type="sign" />
                    </div>
                    <div className="col-md-3 ">
                        <Key value=")" type="sign" col="4" />
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
                       <Key value="+" type="sign" col="4" />
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
                        <Key value="-" type="sign" col="4"  />
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
                        <Key value="*" type="sign" col="4"  />
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-3">
                          <Key value="." type="sign" />
                    </div>
                    <div className="col-md-3">
                         <Key value="0" />
                    </div>
                    <div className="col-md-3">
                          <KeyEqual />
                    </div>
                    <div className="col-md-3">
                         <Key value="/" type="sign" col="4"  />
                    </div>
                </div>
               
            </>
        )
    }

export default Keys