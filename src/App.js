import About from './Components/About/About'
import Booking from './Components/Booking/Booking'
import Footer from './Components/Footer/Footer'
// import Image from './Components/Viewport/Image'
import Food from './Components/Restraunt/Food'
import Navbar from './Components/Navbars/Menu'
import Gallery from './Components/Gallery/Gallery'
import GalleryRes from './Components/Gallery_Res/Gallery_res'
import Contact from './Components/Contact/Contact'
import './App.css'
function App () {
  return (
    <>
      <Navbar />
      {/** <Image /> */}
      <Booking />
      <About />
      <Gallery />
      <GalleryRes />
      <Food />
      <Contact />
      <Footer />
    </>
  )
}
export default App
