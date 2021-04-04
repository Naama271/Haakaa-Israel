import React, { useState, useEffect } from "react";
import axios from "axios";

const Disdata = () => {
  const [term, setTerm] = useState([]);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const search = async () => {
      const res = await axios.get(
        "https://6069b5a1e1c2a10017544d37.mockapi.io/distributors"
      );
      console.log(res.data);

      setTerm(res.data.map((product) => product.title));
      console.log(term);
    };

    search();
  }, []);

  useEffect(() => {
    let newData = [];
    newData = term.filter((product) => product.includes(input));

    setResults(newData);
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  // console.log({data});
  return (
    <div>
      {/* <input type="text" value={input} onChange={handleChange}></input>
      <div key={term.id} className="list">
        {results}
        {term}
      </div> */}
    </div>
  );
};

export default Disdata;
