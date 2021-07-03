import React, { useState } from 'react'
import TaskList from './components/TaskList'
import ValueList from './components/ValueList'

function App(props) {
  const [run, reRun] = useState({});
  console.log(run)

  var show = 0

  return (
    <div className="grid mx-auto max-w-3xl">
      <div className="grid place-items-center">
        <ValueList 
          filter="False"
          reRun={reRun}
        />

      </div>
    </div>
  );
}

export default App;
