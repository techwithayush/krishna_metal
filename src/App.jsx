
import { Outlet } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Reusable/Navbar'
import Footer from './components/Reusable/Footer'
import Scroll from './components/Reusable/Scroll'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Scroll />
    </>
  )
}

export default App
