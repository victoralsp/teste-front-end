import './App.css'
import { Newsletter } from './components/Common/Newsletter/Newsletter'
import { Footer } from './components/Layout/Header/Footer/Footer'
import { Header } from './components/Layout/Header/Header/Header'
import { Home } from './pages/Home'

function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
