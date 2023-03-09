import React from 'react'
import GridCard from './components/gridCard'
import Hero from './components/heroSection'
import AppProvider from './context/appContext/AppProvider'
import LoadingAnimation from './components/loadingAnimationjsx'


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
