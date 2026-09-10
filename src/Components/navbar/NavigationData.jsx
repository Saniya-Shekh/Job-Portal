import React from 'react'
import Ul from './Ul'


const NavigationData = () => {
  let navData = [
    {
      name:'Home',
      path: './home'
    }, 
    {
      name: 'Score',
      path: './score'
    },
    {
      name: 'Acitivities',
      path: './activities'
    }
  ]
  return (
    <>
    <Ul data={navData}>

    </Ul> 
      
    </>
  )
}

export default NavigationData
