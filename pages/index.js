import React from 'react'
import Footer from '../components/Footer'
import HeroComponent from '../components/HeroComponent'
import LanguagesComponent from '../components/LanguagesComponent'
import RecentWorksComponent from '../components/RecentWorksComponent'
import ServicesComponent from '../components/ServicesComponent'

export default function index() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeroComponent />
      <LanguagesComponent />
      <ServicesComponent />
      <RecentWorksComponent />
      <Footer />
    </div>
  )
}
