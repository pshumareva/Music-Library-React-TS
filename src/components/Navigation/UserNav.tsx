import { Link } from 'react-router-dom'

function UserNav(props: any) {
 const handleClick = () => {
  props.setIsLogged(false)
  sessionStorage.clear()
 }

 return (
  <div className="user">
   <Link to="/addalbum" className='text-[1.5rem] color-[#0a0a0a] font-bold mr-2'>Add Album</Link>
   <button className='text-[1.5rem] text-[#646cff] italic font-bold mr-2' onClick={handleClick}>Logout</button>
  </div>
 )
}

export default UserNav
