import React, { useState, useEffect } from "react";
import axios from "axios";
import image from './images/11/MHK002.jpg'

const Productsdata = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const search = async () => {
      const  { data } = await axios.get(
        "https://6069b5a1e1c2a10017544d37.mockapi.io/products"
      );
    //  console.log(data);
 
      setTerm(data.map(product => {
        return (<div className="product_card" key={product.id}>
        <img src={image}></img>
        {product.title}<br/>
        </div>
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
