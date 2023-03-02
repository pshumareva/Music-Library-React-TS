import React, { useState } from 'react'
import GuestNav from './GuestNav'
import UserNav from './UserNav'

// const [isLogged, setIsLogged] = useState(false)


function Navigation() {
 return (
  <nav className='bg-[#7A6E6e] h-0 mb-[15px] flex justify-between text-[rgb(14,14,15)]'>
   <div>
    <a href="/dashboard">Dashboard</a>
   </div>
   {/* {isLogged ? <UserNav /> : <GuestNav />} */}
   <UserNav />
   <GuestNav />
  </nav>
 )
}

export default Navigation
