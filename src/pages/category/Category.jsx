import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';

const Category = () => {
  const [toys, setToys] = useState([]);
  AOS.init();
  useEffect(() => {
    // Fetch the data for the initial category
    fetch(`https://funedutoys.vercel.app/toyQuery?subCategory=math`)
      .then((res) => res.json())
      .then((data) => setToys(data));
      
  }, []);

  const handleMath = (value) => {
    fetch(`https://funedutoys.vercel.app/toyQuery?subCategory=${value}`)
      .then((res) => res.json())
      .then((data) => setToys(data));

  };

  return (
    <div data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="10000" data-aos-easing="ease-in-out" className="my-20">
      <div className="text-center my-5">
        <h3 className="text-4xl font-bold my-10">Shop by Category</h3>
        <div className="my-10 mx-auto md:inline flex flex-col w-1/2 md:w-auto ">
          <button
            className="btn bg-orange-600 mr-3 "
            onClick={() => handleMath("math")}
          >
            Math Toy
          </button>
          <button
            className="btn bg-orange-600 mr-3 mt-2 md:mt-0"
            onClick={() => handleMath("engineering")}
          >
            engineering Toy
          </button>
          <button
            className="btn bg-orange-600 mr-3 mt-2 md:mt-0"
            onClick={() => handleMath("science")}
          >
            Science Toy
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mt-5">
        {toys.map((toy) => (
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={toy.pictureUrl}
                  alt="Shoes"
                  style={{ width: "100px", height: "100px" }}
                  className="rounded-xl w-1/2"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{toy.toyName.slice(0, 20)}</h2>
                <h2 className="card-title">Price ${toy.price}</h2>
                <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
              
                <div className="card-actions">
                  <Link to={`/viewDetailCategory/${toy._id}`}>
                  <button className="btn bg-orange-600" >view details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
