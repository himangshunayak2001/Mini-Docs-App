import React from 'react'
import Backgorund from './components/Backgorund'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
        <Backgorund/>
        <Foreground/>
    </div>
  )
}

export default App