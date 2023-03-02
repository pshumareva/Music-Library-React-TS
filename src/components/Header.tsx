import React from 'react'
import Navigation from './Navigation/Navigation'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between'>
      <Link id="logo" className='italic text-[30px]' to="/">
        <img id="logo-img" className='h-[70px] w-[210px]' src="../../images/logo.png" alt="" />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header
