import React from 'react'
import Logo from './Logo'
import NavigationData from './NavigationData'
import Profile from './Profile'
import './navbar.modulus.css'


const NavContainer = () => {
  return (
    <>
    <article>
        <Logo></Logo>
    </article>
    <article>
        <NavigationData></NavigationData>
    </article>
    <article>
        <Profile></Profile>
    </article>
     
    </>
  )
}

export default NavContainer
