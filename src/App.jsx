import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components';





const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-fixed bg-center relative z-0'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
