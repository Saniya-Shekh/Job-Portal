import React from 'react'
import { Outlet } from 'react-router-dom'
import NavContainer from './Components/navbar/NavContainer'


const App = () => {
  return (
    <main>
        <nav>
            <NavContainer></NavContainer>
        </nav>

        <section>
            <Outlet/>
        </section>
      
    </main>
    
    
  )
}

export default App
