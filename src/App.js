//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Video from './components/Video';
import About from './components/About';
import Products from './components/Products/Products';
import Distributors from './components/Distributors/Distributors';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
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
