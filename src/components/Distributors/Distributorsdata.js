import React, { useState, useEffect } from "react";
import axios from "axios";
import whatsapp from './icons/whatsapp.png';
import phone from './icons/phone.png';
import './dis.css';

const Mashudata = ({location}) => {
  const [display, setdisplay] = useState([]);
  // const [term, setTerm] = useState([]);
  // const [center, setCenter] = useState([]);
  // const [south, setSouth] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://6069b5a1e1c2a10017544d37.mockapi.io/distributors"
      );

      const arr = data.filter((distributor) => {
        //  console.log(distributor.area)
        return distributor.area === location;
      });



      setdisplay(
        arr.map((distributor) => {
          return (
            <tr key={distributor.id}>
              <td>
                {distributor.name}
                <br />
                {distributor.title}
              </td>
              <td> {distributor.city}</td>
              <td><a href={`https://wa.me/972${distributor.phone}`}><img src={whatsapp}/></a> </td>
              <td><a href= {`tel:${distributor.phone}`}><img src={phone}/></a> </td>
            </tr>
          );
        })
      );
    };

    search();
  }, []);

  return (
    <table>
      <thead>
        <td>שם</td>
        <td>איזור</td>
        <td>יצירת קשר</td>
      </thead>
      {display}
    </table>
  );
};

export default Mashudata;
