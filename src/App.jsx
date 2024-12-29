import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Doctors from "./Components/Doctors";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="doctors">
          <Doctors />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="about">
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
