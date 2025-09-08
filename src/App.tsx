import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Homepage from './pages/Homepage'
import ContactUs from './pages/ContactUspage'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
