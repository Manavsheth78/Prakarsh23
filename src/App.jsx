import React, { Suspense } from 'react'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import Glimps from './components/Glimps/Glimps'
import Team from './components/Team/Team'
import Event from './components/Events/Event'
const App = () => {
  return (
    <>
        <Suspense fallback={<Loader/>}>
        <Home/>
        <Nav/>
        <About/>
        <Event/>
        <Team/>
        <Glimps/>
        <Footer/>
        </Suspense>
    </>
  
  );
}

export default App