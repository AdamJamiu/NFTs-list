import { useState } from 'react'
import GridCard from './components/GridCard'
import Hero from './components/HeroSection'
import AppProvider from './context/appContext/AppProvider'
import LoadingAnimation from './components/LoadingAnimationjsx'


function App() {

  return (
    <AppProvider>
      <LoadingAnimation />
      <Hero />
      <GridCard />
    </AppProvider>
  )
}

export default App
