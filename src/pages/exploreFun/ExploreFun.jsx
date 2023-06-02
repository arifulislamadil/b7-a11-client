import React from "react";

const ExploreFun = () => {
  return (
    <div className="mb-20 w-full">
      <div>
        <h3 className="text-4xl font-bold text-center">Explore fun</h3>
      </div>
      <div className="grid grid-row-1 md:grid-cols-3 gap-7 gap-x-8 mt-10 w-auto">
        <div >
          <div>
            <iframe
              width="300"
              height="315"
              src="https://www.youtube.com/embed/1BkQiCXAdNU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h3 className="text-xl font-bold">It’s me, Mario!</h3>
            <p>LEGO brings new adventures with Mario</p>
          </div>
        </div>
        <div >
          <div>
            <iframe
              width="300"
              height="315"
              src="https://www.youtube.com/embed/UBICz01PcNM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
             <h3 className="text-xl font-bold">It’s me, Mario!</h3>
            <p>LEGO brings new adventures with Mario</p>
          </div>
        </div>
        <div >
          <div>
          <iframe width="300" height="315" src="https://www.youtube.com/embed/UduS_eFRIDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3 className="text-xl font-bold">It’s me, Mario!</h3>
            <p>LEGO brings new adventures with Mario</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreFun;
