import React from 'react'
import Navigation from './Navigation/Navigation'

function Header() {
 return (
  <header className='flex justify-between'>
   <a id="logo" className='italic text-[30px]' href="/"
   ><img id="logo-img" className='h-[70px] w-[210px]' src="../../images/logo.png" alt=""
    /></a>
   <Navigation /></header>
 )
}

export default Header
