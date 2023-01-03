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


function App() {


  return (
    <>



      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/regprof" exact element={<RegProf/>}/> */}
          <Route path="/donate" exact element={<Donations />} />
          <Route path="/edtech" exact element={<Edtech />} />
          <Route path="/completion" exact element={<Completion />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/meds" exact element={<MedicalSupplies />} />

          {/* protected routes */}
          {/* <Route element={<Routeguard />}>
              <Route exact path="/:username" element={<Profile />} />
              <Route exact path="/editprofile" element={<Editprofile />} />

            </Route> */}
        </Routes >
        <Footer />
      </Router >



    </>
  )
}

export default App