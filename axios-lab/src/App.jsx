import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar"
import { useState } from 'react'
import StarshipList from './components/StarshipList'
import StarshipPage from './components/StarshipPage'
import FilmsList from './components/FilmsList'
import FilmsPage from './components/FilmsPage'
import PlanetsList from './components/PlanetsList'
import PlanetsPage from './components/PlanetsPage'
import PeopleList from './components/PeopleList'
import PeoplePage from './components/PeoplePage'
import SpeciesList from './components/SpeciesList'
import SpeciesPage from './components/SpeciesPage'
import VehicleList from './components/VehicleList'
import VehiclePage from './components/VehiclePage'


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Han Shot First</h2>} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path='/starships/:starshipId' element={<StarshipPage />} />
        <Route path="/films" element={<FilmsList />} />
        <Route path='/films/:filmId' element={<FilmsPage />} />
        <Route path="/planets" element={<PlanetsList />} />
        <Route path='/planets/:planetId' element={<PlanetsPage />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path='/people/:peopleId' element={<PeoplePage />} />
        <Route path="/species" element={<SpeciesList />} />
        <Route path='/species/:speciesId' element={<SpeciesPage />} />
        <Route path="/vehicle" element={<VehicleList />} />
        <Route path='/vehicle/:vehicleId' element={<VehiclePage />} />
        <Route path='*' element={<h2>These are not the droids you're looking for</h2>} />
      </Routes>
    </>
  )
}

export default App
