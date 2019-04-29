import React from 'react'

import Key1 from './Key1'
import Key2 from './Key2'
import Key3 from './Key3'
import Key4 from './Key4'
import Key5 from './Key5'
import Key6 from './Key6'
import Key7 from './Key7'
import Key8 from './Key8'
import Key9 from './Key9'
import Key0 from './Key0'
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
                        <Key1 />
                    </div>
                    <div className="col-md-3">
                         <Key2 />
                    </div>
                    <div className="col-md-3">
                         <Key3 />
                    </div>
                    <div className="ml-3">
                       <KeyPlus />
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-3">
                       <Key4 />
                    </div>
                    <div className="col-md-3">
                       <Key5 />
                    </div>
                    <div className="col-md-3">
                         <Key6 />
                    </div>
                    <div className="col-md-3">
                        <KeyMinus />
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-3">
                         <Key7 />
                    </div>
                    <div className="col-md-3">
                        <Key8 />
                    </div>
                    <div className="col-md-3">
                         <Key9 />
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
                         <Key0 />
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