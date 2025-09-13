import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Homepage from './pages/Homepage'
import ContactUs from './pages/ContactUspage'
import AboutUs from './pages/AboutUspage'
import Servicepage from './pages/Servicespage'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Servicepage/>}/>
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
