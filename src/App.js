import React from 'react'
import HeroComponent from './components/HeroComponent'
import ServicesComponent from './components/ServicesComponent'
import WorksComponent from './components/WorksComponent'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative w-full min-h-screen font-mont text-custom-dark1">
      <HeroComponent />
      <ServicesComponent />
      <WorksComponent />
      <Footer />
    </div>
  )
}

export default App