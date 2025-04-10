import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <Banner />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
