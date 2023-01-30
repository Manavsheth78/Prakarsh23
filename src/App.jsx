import React, { Suspense } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Team from "./components/Team/Team";
import Event from "./components/Events/Event";
import Sponsor from "./components/Sponsor/Sponsor";
import { NavBar } from "./components/Nav/NavBar";
import Glimpse from "./components/Glimpse/Glimpse";
const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Home />
        <About />
        {/* <Event /> */}
        <Team />
        <Sponsor />
        <Glimpse />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
