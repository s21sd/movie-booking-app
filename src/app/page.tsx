import styles from './page.module.css'
import Navbar from './components/Navabar/Navbar'
import Slider from './components/HomeSlider/Slider'
import Caraousal from './Caraousal/Caraousal'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Slider />
      <Caraousal />
    </main>
  )
}
