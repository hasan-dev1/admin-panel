import React, { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dhimans-server.vercel.app/productview`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      <div className="w-4/5 mx-auto min-h-[70vh]">
        <div className="lg:w-1/2 mx-auto ">
          {loading ? (
            <div>Loading...</div>
          ) : (
            product?.map((item, idx) => (
              <div
                key={idx}
                className="card card-side my-6 lg:h-[200px] shadow-xl rounded border"
              >
                <figure>
                  <img className="h-full w-48" src={item?.image} alt="Movie" />
                </figure>
                <div className="card-body flex flex-col justify-between">
                  <div>
                    <p className="text-xl font-bold text-slate-500">
                      {item?.name}
                    </p>
                    <p className="text-xl font-bold text-slate-500">
                      {item?.price}
                    </p>
                    <p className="text-slate-400">
                      {item?.details.slice(0, 50)}
                    </p>
                  </div>
                  <div className="text-end">
                    <button className="btn btn-sm btn-primary">Details</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
