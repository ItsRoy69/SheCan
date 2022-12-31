import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Donations from './pages/Donations'
import Completion from './pages/Completion'
import Edtech from './pages/Edtech'
import UserSignIn from './pages/UserSignIn'

function App() {


  return (
    <>



      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/donate" exact element={<Donations />} />
          <Route path="/edtech" exact element={<Edtech />} />
          <Route path="/completion" exact element={<Completion />} />

          {/* protected routes */}
          {/* <Route element={<Routeguard />}>
              <Route exact path="/:username" element={<Profile />} />
              <Route exact path="/editprofile" element={<Editprofile />} />

            </Route> */}
        </Routes >
      </Router >



    </>
  )
}

export default App