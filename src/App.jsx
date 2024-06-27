import React, { useEffect } from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStore from './components/AppStore/AppStore';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? 
    localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <CarList />
      <Services />
      <Testimonial />
      <AppStore />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;