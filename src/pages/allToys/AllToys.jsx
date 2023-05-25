import React, { useEffect, useState } from "react";
import Toy from "./toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);
console.log(toys);
  useEffect(() => {
    fetch("http://localhost:5000/addToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full mt-5 mb-20">
      <table className="table w-full">
      <thead>
          <tr>
            <th>Toy Info</th>
            <th>Seller Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th className="">Action</th>
          </tr>
        </thead>
        {toys.map((toy) => (
          <Toy toy={toy}></Toy>
        ))}
      </table>
    </div>
  );
};

export default AllToys;
