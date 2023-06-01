import React, { useEffect, useState } from "react";
import Toy from "./toy";
import { FaSearch } from 'react-icons/fa';
import DynamicHeader from "../../routes/DynamicHeader";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [search,setSearch] = useState('');

  // show 20 toys at the first time and then show more then 20 toys.
  const [visibleItems, setVisibleItems] = useState(20);
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = ({ toys }) => {
    if (!showAll) {
      setVisibleItems(toys);
      setShowAll(true);
    }
  };

  useEffect(() => {
    fetch("https://funedutoys.vercel.app/addToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleInputChange = (event)=>{
setSearch(event.target.value);
  }

  const handleSearch=()=>{
    const searchData = toys.filter(toy=>toy.toyName.toLowerCase() === search.toLowerCase())
    setToys(searchData);
  }
  return (
    <div className="overflow-x-auto w-full mt-5 mb-20">
      <DynamicHeader title="All toys"></DynamicHeader>
      <div className="flex mx-auto w-1/4 my-4">
  <div className="input-group">
    <input value={search} onChange={handleInputChange} type="text" placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square bg-orange-600">
    <h3 ><FaSearch /> </h3>
    </button>
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
        {toys.slice(0, visibleItems).map((toy) => (
          <Toy toy={toy}></Toy>
        ))}
      </table>
      <div className="text-center">
        {showAll ? (
          ""
        ) : (
          <button className="btn bg-orange-600" onClick={handleShowMore}>
            All Toys
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToys;
