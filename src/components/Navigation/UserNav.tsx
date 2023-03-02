import React from 'react'

function UserNav() {
 return (
  <div className="user">
<<<<<<< Updated upstream
   <a href="/create">Add Album</a>
   <a href="/dashboard" className="logoutBtn">Logout</a>
=======
   <Link to="/addalbum">Add Album</Link>
   <Link to="/dashboard" className="logoutBtn">Logout</Link>
>>>>>>> Stashed changes
  </div>
 )
}

export default UserNav
