import React from 'react'
import { Link } from 'react-router-dom'

function UserNav() {
 return (
  <div className="user">
   <Link to="/addalbum" className='text-[1.5rem] color-[#0a0a0a] font-bold mr-2'>Add Album</Link>
   <Link to="/dashboard" className='text-[1.5rem] color-[#0a0a0a] font-bold'>Logout</Link>
  </div>
 )
}

export default UserNav
