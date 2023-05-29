import React, { useEffect, useState } from "react";

const Category = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);

  useEffect(() => {
    // Fetch the data for the initial category
    fetch(`http://localhost:5000/toyQuery?subCategory=math`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);


  const handleMath = (value) => {
    fetch(`http://localhost:5000/toyQuery?subCategory=${value}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div>
      <div>
        <h3>Toy Category</h3>
        <button onClick={() => handleMath("math")}>Math Toy</button>
        <button onClick={() => handleMath("engineering")}>engineering Toy</button>
        <button onClick={() => handleMath("science")}>Science Toy</button>
      </div>
      <div>
        {
            toys.map((toy)=><h2>{toy.name}</h2>)
        }
      </div>
    </div>
  );
};

export default Category;
