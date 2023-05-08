import { Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Starships from './components/StarShips/Starships'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships />} />
      </Routes>
    </>
  )
}

export default App
