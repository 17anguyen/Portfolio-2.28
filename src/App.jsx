import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components';





const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-fixed bg-center image-blurred-edge relative z-0'>
        <div className='z-0'>
          <Navbar />
          <Hero />
      <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Works /> 
        <Tech />
        <Feedbacks/>
      
      </div>
      <div className='faded faded-top monstera-bg  bg-cover bg-no-repeat bg-fixed bg-center relative  relative z-0'>
        <div>
          <Contact />
        </div>
        </div>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
