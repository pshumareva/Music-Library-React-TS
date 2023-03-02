import React from 'react'

function Login() {
 return (
  <div>
   <section id="login" className='mb-[100px] h-screen'>
    <div className="bg-white max-w-[460px] m-auto mt-[100px] p-11 text-center font-black shadow-[15px_15px_rgba(0,0,0,0.15)]">
     <h2 className='mt-0 mb-[30px] text-[30px] italic'>Login</h2>
     <form className="login-form">
      <input type="text" name="email" id="email" placeholder="email" className='bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] p-[15px] box-border text-sm text-center' />
      <input
       type="password"
       name="password"
       id="password"
       placeholder="password"
       className='bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] p-[15px] box-border text-sm text-center'
      />
      <button type="submit" className='uppercase fw-bold bg-[#CBF6FF] w-[50%] border-0 p-[15px] text-black text-sm'>login</button>
      <p className="message mt-2">Not registered? <a href="#">Create an account</a></p>
     </form>
    </div>
   </section>
  </div>
 )
}

export default Login
