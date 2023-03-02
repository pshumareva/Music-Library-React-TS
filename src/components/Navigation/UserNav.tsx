import { Link } from 'react-router-dom'

function UserNav() {
 return (
  <div className="user">
   <a href="/create">Add Album</a>
   <Link to="/dashboard" className="logoutBtn">Logout</Link>
  </div>
 )
}

export default UserNav
