import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Result from './components/Result'
import Keys from './components/Keys/Keys'

class App extends React.Component {



  render(){
    return (
      <div className="container calculator-body">
       <div className="row">
          <div className="col-md-4 offset-4">
            <h3>Four Function Calculator</h3>
            <Result />
            <Keys />
          </div>
          </div>
      </div>
    );
  }
  
}

export default App;
