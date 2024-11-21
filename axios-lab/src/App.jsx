import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar"
import { useState } from 'react'
import StarshipList from './components/StarshipList'
import StarshipPage from './components/StarshipPage';


const initialState = [
  { _id: 1, name: 'CR90 corvette', length: 150, crew: 165 },
  { _id: 2, name: 'Star Destroyer', length: 1600, crew: 47060 },
  { _id: 3, name: 'Sentinel-class landing craft', length: 38, crew: 5 },
  { _id: 4, name: 'Death Star', length: 120000, crew: 342953 },
  { _id: 5, name: 'Millennium Falcon', length: 34, crew: 4 },
];

const App = () => {
  const [starships, setStarships] = useState(initialState)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Han Shot First</h2>} />
        <Route path="/starships" element={<StarshipList starships={starships} />} />
        <Route path='/starships/:starshipId' element={<StarshipPage starships={starships} />} />
        <Route path='*' element={<h2>These are not the droids you're looking for</h2>} />
      </Routes>
    </>
  )
}

export default App
