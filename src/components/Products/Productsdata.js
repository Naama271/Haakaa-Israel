import React, { useState, useEffect } from "react";
import axios from "axios";
import image from './images/11/MHK002.jpg'
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
        //    <Link
        //   to={`products/${product.id}`}
        //   key={product.id}
        // >

      <div className="product_card" key={product.id}>
          {/* <img src={require('/Users/avicohen/AppleSeeds/react/Haakaa-Israel/src/components/Products/' +product.primarying.slice(2)).default}></img> */}
        <img src={product.primarying}></img>
        {product.title}<br/>
        </div>
        // </Link>
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
