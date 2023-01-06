import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Donations from './pages/Donations'
import Completion from './pages/Completion'
import Edtech from './pages/Edtech'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import RegProf from './pages/RegProf'
import MedicalSupplies from './pages/MedicalSupplies'
import Faq from './pages/Faq'
import Dashboard from './pages/Dashboard'
import Safety from './pages/Safety';


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/donate" exact element={<Donations />} />
          <Route path="/edtech" exact element={<Edtech />} />
          <Route path="/completion" exact element={<Completion />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/meds" exact element={<MedicalSupplies />} />  
          <Route path="/dashboard" exact element={<Dashboard />} />   
          <Route path="/safety" exact element={<Safety/>}></Route>      

        </Routes >
        <Footer />
      </Router >
    </>
  )
}

export default App