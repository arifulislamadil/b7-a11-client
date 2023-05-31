import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import MyToy from "./MyToy";
import DynamicHeader from "../../routes/DynamicHeader";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    <progress className="progress w-56"></progress>;
  }

  const url = `http://localhost:5000/addToy?sellerEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

// handle sorting data from toys
  const handleSortAscending = () => {
    const lowest = [...toys].sort((a, b) => a.price - b.price);
    setToys(lowest);
  };

  const handleSortDescending = () => {
    const highest = [...toys].sort((a, b) => b.price - a.price);
    setToys(highest);
  };

  return (
    <div className="overflow-x-auto w-full mt-5 mb-20">
   <DynamicHeader title="My toys"></DynamicHeader>
      <div className="form-control flex justify-center items-center mb-3">
        <div>
        <button className="btn bg-orange-600 mr-2" onClick={handleSortAscending}>lowest to highest</button>
      <button className="btn bg-orange-600" onClick={handleSortDescending}>Highest to lowest</button>
        </div>
      </div>
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
          <MyToy toys={toys} setToys={setToys} toy={toy}></MyToy>
        ))}
      </table>
    </div>
  );
};

export default MyToys;
