import  Navbar  from "./components/Navbar";
import Banner from "./components/Banner";
import Services from './components/Services'
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
