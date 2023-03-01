function HomePage() {
  return (
    <>
      <section id="home" className='mt-20 h-screen'>
        <img src="../../images/landing.png" alt="home" className='italic block m-auto h-[33%] w-[33%] bg-transparent' />
        <h2 id="landing-text" className='italic text-[27px] text-[rgb(68, 67, 67)] text-center'>
          <span className='normal mt-6 font-bold text-[25px]'>Add your favourite albums</span> <strong>||</strong>
          <span className='normal mt-6 font-bold text-[25px]'>Discover new ones right here!</span>
        </h2>
      </section></>)
}

export default HomePage
