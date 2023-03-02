import { Link } from 'react-router-dom'
import GuestNav from './GuestNav'
import UserNav from './UserNav'

// const [isLogged, setIsLogged] = useState(false)


function Navigation() {
 return (
  <nav>
   <div>
    <Link to="/dashboard">Dashboard</Link>
   </div>
   {/* {isLogged ? <UserNav /> : <GuestNav />} */}
   <UserNav />
   <GuestNav />


  </nav>
 )
}

export default Navigation
