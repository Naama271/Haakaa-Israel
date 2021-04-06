import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


const Productsdata = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const search = async () => {
      const  { data } = await axios.get(
        "https://6069b5a1e1c2a10017544d37.mockapi.io/products"
      );
  
 
      setTerm(data.map(product => {
        
        return (    
    
      <Link to={{pathname: `products/${product.id}`, query: product}}
      className="product_card" key={product.id}>
        <img src={product.primarying}></img>
        {product.title}<br/>
        </Link>

          )
      }
      ));
    };

    search();
  }, []);


  return (
    <div className="width100 ">
{term}
    </div>
  );
};

export default Productsdata;
