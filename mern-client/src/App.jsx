import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'

function App() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith('/admin');

  return (
    <>
      {!hideLayout && <Navbar />}
      <div className='min-h-screen'>
        <Outlet />
      </div>
      {!hideLayout && <MyFooter />}
    </>
  )
}

export default App
