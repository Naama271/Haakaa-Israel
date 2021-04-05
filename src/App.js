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

import NotFound from "./components/NotFound";
import Product from './components/Products/Product';
import {BrowserRouter , Route, Switch} from 'react-router-dom'




function App() {
  return (
    <div>
      <BrowserRouter>
   
   <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} />
      <Route component={NotFound} />
      </Switch >
  </BrowserRouter>
          <Helmet>
        <title>Haakaa Israel</title>
        <meta name="Haakaa Israel" content="Haakaa Israel" />
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
