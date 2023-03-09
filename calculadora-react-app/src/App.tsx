import { useContext } from 'react'
import './App.css'
import { Calculator } from './Components/Calculater'
import { FunctionsContext } from './Context/functions'

function App() {

  const { num } = useContext(FunctionsContext)

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='result-container'>
        <p>{num}</p>
      </div>
      <Calculator />
    </div>
  )
}

export default App
