import React from 'react'
import { Link } from 'react-router-dom'

function UserNav() {
 return (
  <div className="user">
   <Link to="/addalbum">Add Album</Link>
   <Link to="/dashboard" className="logoutBtn">Logout</Link>
  </div>
 )
}

export default UserNav
