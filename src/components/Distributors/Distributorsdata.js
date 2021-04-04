import React, { useState, useEffect } from "react";
import axios from "axios";
import Distributor from "./Distributor";

const Disdata = () => {
  const [term, setTerm] = useState([]);
  //const [results, setResults] = useState([]);
 // const [input, setInput] = useState("");

  useEffect(() => {
    const search = async () => {
      const { data }= await axios.get(
        "https://6069b5a1e1c2a10017544d37.mockapi.io/distributors"
      );
      console.log(data);

      setTerm(data.map(distributor => {
        return (<tr key={distributor.id}>
       <td> {distributor.name}<br/>{distributor.title}</td>
      
       <td>   {distributor.city}<br/></td>
       <td>   {distributor.phone}<br/></td>
       
        </tr>
          )
      }
      ));
    };

    search();
  }, []);



  // console.log({data});
  return (
    <table>

        {term}
      
    </table>
  );
};

export default Disdata;
