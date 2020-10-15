import './App.css'
import React, { useState } from 'react'
import Corner from './components/Corner'
import Header from './components/Header'
import Switch, { Option } from './components/Switch'
import Simple from './examples/Simple'
import Complex from './examples/Complex'
import Link from '@material-ui/core/Link'

const App = () => {
  const [option, setOption] = useState<Option>('simple')
  
  return (<>
    <Corner />
    <Header />
    <div className='container'>
      <h1>Examples (<Link href='https://github.com/harrisonlo/boltsearch/tree/master/demo/src/examples'>view code</Link>)</h1>
      <Switch option={option} setOption={setOption} />
      {option === 'simple' ? <Simple /> : <Complex />}
    </div>
  </>)
}

export default App