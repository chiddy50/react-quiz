import { useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import { AppState } from './context/AppState'

function App() {

  return (
    <div className="App">
        <AppState>
          <Home />
        </AppState>
    </div>
  )
}

export default App
