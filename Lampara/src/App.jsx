import { useState } from 'react'
import './App.css'

function App() {
  const [encendida, setEncendida] = useState(false)

  return (
    <>
    <div className='lampara'>
      <div className={`circulo ${encendida ? 'encendida' : 'apagada'}`}></div>
      <div className={encendida ? 'on' : 'off'}>
        <div className="content">
          <h1>Lámpara {encendida ? 'encendida' : 'apagada'}</h1>
        </div>
      </div>
      <button onClick={() => setEncendida(!encendida)}>
        {encendida ? 'OFF' : 'ON'}
      </button>

    </div>
    </>
  )
}

export default App
