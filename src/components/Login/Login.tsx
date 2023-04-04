import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { login } from "../../utils/data"

function Login() {
 const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
 const [isLogged, setIsLogged] = useState(false)

 const handleChange = (e) => {
  setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
 }

 const handleSubmit = (e) => {
  login(loginInfo.email, loginInfo.password)
 }

 useEffect(() => {
  const loggedUser = sessionStorage.getItem('authToken');
  if (loggedUser) {
   setIsLogged(true)
  }
 }, [])

 return (
  <div>
   <section id="login" className='mb-[100px] h-screen'>
    <div className="bg-white max-w-[460px] m-auto mt-[100px] p-11 text-center font-black shadow-[15px_15px_rgba(0,0,0,0.15)]">
     <h2 className='mt-0 mb-[30px] text-[30px] italic'>Login</h2>
     <form className="login-form" onSubmit={handleSubmit}>
      <input type="text" name="email" id="email" placeholder="email" className='bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] mb-2 p-[15px] box-border text-sm text-center' onChange={handleChange} />
      <input
       type="password"
       name="password"
       id="password"
       placeholder="password"
       className='bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] mb-4 p-[15px] box-border text-sm text-center'
       onChange={handleChange}
      />
      <button type="submit" className='uppercase fw-bold bg-[#CBF6FF] w-[50%] border-0 p-[15px] text-black text-sm'>login</button>
      <p className="message mt-2">Not registered? <a href="#">Create an account</a></p>
     </form>
    </div>
   </section>{isLogged && < Navigate replace to="/dashboard" />}
  </div>
 )
}

export default Login
