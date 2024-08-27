import React from 'react'
import Navigation from './Navigation/Navigation'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between  items-center py-[0.3em] px-[3em] bg-[#CBF6FF] shadow-[0_5px_5px_#CBF6FF]'>
      <Link id="logo" className='italic text-[30px]' to="/">
        <img id="logo-img" className='h-[70px] w-[210px]' src="../../images/logo.png" alt="" />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header
