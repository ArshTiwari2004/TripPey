import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Homepage />
    <Footer />
    </>
  )
}

export default App
