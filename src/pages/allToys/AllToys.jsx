import React, { useEffect, useState } from "react";
import Toy from "./toy";

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
    fetch("http://localhost:5000/addToy")
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
      <div className="flex mx-auto w-1/4 my-4">
  <div className="input-group">
    <input value={search} onChange={handleInputChange} type="text" placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
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
