//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Video from './components/Video';
import About from './components/About';
import Products from './components/Products/Products';
import Distributors from './components/Distributors/Distributors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";
import { ReactNavbar} from "react-responsive-animate-navbar";




function App() {
  return (
    <div>
          <Helmet>
        <title>Haakaa Israel</title>
        <meta name="Haakaa Israel" content="Helmet application" />
        </Helmet>
      <Header /> 
      <Video />
      <About />
      <Products />
      <Distributors />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
