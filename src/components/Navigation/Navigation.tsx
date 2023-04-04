import React, { useState, useEffect } from 'react'
import GuestNav from './GuestNav'
import UserNav from './UserNav'


function Navigation() {
 const [isLogged, setIsLogged] = useState(false)

 useEffect(() => {
  const authToken = sessionStorage.getItem('authToken')
  if (authToken) {
   setIsLogged(true)
  }
 }, [])

 return (
  <nav className='bg-[#7A6E6e] h-0 mb-[15px] flex justify-between text-[rgb(14,14,15)]'>
   <div>
    <a href="/dashboard" className='text-[1.5rem] color-[#0a0a0a] font-bold mr-2'>Dashboard</a>
   </div>
   {isLogged ? <UserNav setIsLogged={setIsLogged} isLogged={isLogged} /> : <GuestNav />}
  </nav>
 )
}

export default Navigation
