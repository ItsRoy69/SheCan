import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Donations from './pages/Donations'
import Completion from './pages/Completion'
import UserSignIn from './pages/UserSignIn'

function App() {


  return (
    <>



      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/donate" element={<Donations />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/completion" element={<Completion />} />

          {/* protected routes */}
          {/* <Route element={<Routeguard />}>
              <Route exact path="/:username" element={<Profile />} />
              <Route exact path="/editprofile" element={<Editprofile />} />

            </Route> */}
        </Routes>
      </Router>



    </>
  )
}

export default App