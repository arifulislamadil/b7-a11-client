import React, { useEffect, useState } from "react";
import Toy from "./toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <h3>{toys.length}</h3>

      {toys.map((toy) => (<Toy toy={toy}></Toy>))}
 
    </div>
  );
};

export default AllToys;
