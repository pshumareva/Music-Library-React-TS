import React from 'react'
import Navigation from './Navigation/Navigation'
import { Link } from 'react-router-dom'

function Header() {
<<<<<<< Updated upstream
 return (
  <header className='flex justify-between'>
   <a id="logo" className='italic text-[30px]' href="/"
   ><img id="logo-img" className='h-[70px] w-[210px]' src="../../images/logo.png" alt=""
    /></a>
   <Navigation /></header>
 )
=======
  return (
    <header className='flex justify-between'>
      <Link id="logo" className='italic text-[30px]' to="/">
        <img id="logo-img" className='h-[70px] w-[210px]' src="../../images/logo.png" alt="" />
      </Link>
      <Navigation />
    </header>
  )
>>>>>>> Stashed changes
}

export default Header
