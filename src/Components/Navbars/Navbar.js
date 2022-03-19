import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Restraunt from '../Restraunt/Food'
import Contact from '../Contact/Contact'
import Menu from './Menu'
function App () {
  return (
    <>
      <div className='head'>
        <h1 className='top'> Hotel <br /><span className='abhi'>Abhinandan</span>
          <Router>
            <nav>
              <Link to='/room-booking'>
                <button type='button' className='btn'>Book Now</button>
              </Link>
            </nav>
            <Routes>
              <Route path='room-booking' element={<Contact />} />
            </Routes>
          </Router>
        </h1>
        <div className='navbar'>
          <Router>
            <Menu />
            <Routes>
              <Route path='/' />
              <Route path='/about' element={<About />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/restraunt' element={<Restraunt />} />
              {/** <Route path='/travel' element={<Travelling />} /> */}
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
