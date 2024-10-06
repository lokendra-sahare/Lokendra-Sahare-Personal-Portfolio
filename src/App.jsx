import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/homepage/navbar/Navbar";
import Hero from "./components/homepage/hero/Hero";
import { Parallax } from "./components/parallax/Parallax";
import About from "./components/about/About";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Sidebar } from "./components/homepage/sidebar/Sidebar";
import AllProjects from "./components/all projcts/AllProjects";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for controlling the sidebar
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar open/close state
  };

  useEffect(() => {
    // Simulate content loading (replace this with your actual content loading logic)
    const timer = setTimeout(() => {
      setFadeOut(true); // Start the fade-out animation
      setTimeout(() => {
        setIsLoading(false); // Remove the spinner after the animation
      }, 1000); // Delay to match the fade-out animation duration (1 second)
    }, 3000); // 2 seconds for demo purposes

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          // Show the loading spinner if the content is still loading
          <div className={`loading-spinner ${fadeOut ? "fade-out" : ""}`}>
            <img src="/stop.svg" alt="Loading..." />
          </div>
        ) : (
          <>
            {/* Pass the sidebar state and toggle function to Sidebar component */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <section id="Homepage">
                      <Navbar />
                      <Hero />
                    </section>
                    <section id="Services">
                      <Parallax type="services" />
                    </section>
                    <section>
                      <About />
                    </section>
                    <section id="Portfolio">
                      <Parallax type="portfolio" />
                    </section>
                    <Portfolio />
                    <section id="Contact">
                      <Contact />
                    </section>
                  </>
                }
              />
              <Route path="/all-projects" element={<AllProjects />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
