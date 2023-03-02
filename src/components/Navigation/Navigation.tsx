import React, { useState } from 'react'
import GuestNav from './GuestNav'
import UserNav from './UserNav'

// const [isLogged, setIsLogged] = useState(false)


function Navigation() {
 return (
  <nav>
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
