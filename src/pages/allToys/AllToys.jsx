import React, { useEffect, useState } from "react";
import Toy from "./toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  // show 20 toys at the first time and then show more then 20 toys.
  const [visibleItems, setVisibleItems] = useState(5);
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = ({toys}) => {
    if (!showAll) {
      setVisibleItems(toys);
      setShowAll(true);
    }
  };

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
        {toys.slice(0, visibleItems).map((toy) => (
          <Toy toy={toy}></Toy>
        ))}
       
      </table>
      <div className="text-center">
        {
          showAll ? "":<button className="btn bg-orange-600" onClick={handleShowMore}>All Toys</button>
        }
      </div>
    </div>
  );
};

export default AllToys;
