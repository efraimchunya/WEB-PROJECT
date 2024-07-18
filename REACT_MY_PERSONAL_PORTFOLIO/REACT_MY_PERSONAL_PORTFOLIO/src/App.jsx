import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Myprojects from './components/myprojects/Myprojects'

const App = () => {
  return (
    <Router>
        <Header />
        <About />
        <Experience />
        <Myprojects />
        <Contacts />
        <Footer />
    </Router>
  )
}

export default App;