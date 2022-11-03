import Hero from '../components/Hero/Hero'
import Navbar from '../components/shared/Navbar/Navbar'
import { app, database } from '../config/firebaseConfig';

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
    </div>
  )
}
