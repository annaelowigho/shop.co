import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Layout/Nav'
import Homepage from './Homepage'
import Footer from './Layout/Footer'

function App() {

  return (
    <>
      <Nav />
      <Homepage />
      <Footer />
    </>
  )
}

export default App
