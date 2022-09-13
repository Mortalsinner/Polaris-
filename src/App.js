import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from "./component/Home";
import NasaPhoto from "./component/NasaPhoto";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import SecondHero from "./component/SecondHero";




function App() {
  return (
      
    <div>
        <BrowserRouter>


        <Navbar></Navbar>
        <Hero></Hero>
        <NasaPhoto></NasaPhoto>
        <SecondHero></SecondHero>
        <Footer></Footer>

          
            
        </BrowserRouter>
    </div>
    
    
  );
}

export default App;
