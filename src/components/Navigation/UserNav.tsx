import React from 'react'

function UserNav() {
 return (
  <div className="user">
   <a href="/create">Add Album</a>
   <a href="/dashboard" className="logoutBtn">Logout</a>
  </div>
 )
}

export default UserNav
