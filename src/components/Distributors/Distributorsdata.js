import React, { useState, useEffect } from "react";
import axios from "axios";

const Notrhdata = () => {
  const [term, setTerm] = useState([]);
  const [north, setNorth] = useState([]);
  const [center, setCenter] = useState([]);
  const [south, setSouth] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data }= await axios.get(
        "https://6069b5a1e1c2a10017544d37.mockapi.io/distributors"
      );

      
      const northArr = data.filter (distributor=>{
      //  console.log(distributor.area)
        return distributor.area==="north";
      }
      )

      const southArr = data.filter (distributor=>{
       // console.log(distributor.area)
        return distributor.area==="south"
      }
      )

      const centerArr = data.filter (distributor=>{
      //  console.log(distributor.area)
        return distributor.area==="center"
      }
      )
  
      setNorth(northArr.map(distributor => {
        return (
        <tr key={distributor.id}>
       <td> {distributor.name}<br/>{distributor.title}</td>
       <td>   {distributor.city}</td>
       <td>   {distributor.phone}</td>
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
      <thead><td>שם</td><td>איזור</td><td>יצירת קשר</td></thead>
        {north}
    </table>
  );
};

export default Notrhdata;
