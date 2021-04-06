//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import About from './components/About';
import Products from './components/Products/Products';
import Distributors from './components/Distributors/Distributors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";

import NotFound from "./components/NotFound";
import Product from './components/Products/Product';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from './components/Home';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header /> 
      <Helmet>
        <title>Haakaa Israel</title>
        <meta name="Haakaa Israel" content="Haakaa Israel" />
        </Helmet>
   <Switch>
      <Route  path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/distributors" component={Distributors} />
      <Route  path="/contact" component={Contact} />
      <Route  path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} />
      <Route component={NotFound} />
    
      </Switch >
     
  </BrowserRouter>
  <Footer />
     
     
    
    </div>
  );
}

export default App;
