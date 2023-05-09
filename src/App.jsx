import { Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Starships from './components/StarShips/Starships'
import StarshipDetails from './components/StarShips/StarshipDetails'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships />} />
        <Route path='/starships/:starshipId' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
