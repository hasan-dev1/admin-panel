import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate()

    const handleproduct = (e)=>{
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const details = form.detailes.value;

        const product = {
            name,
            price,
            image,
            details
        }

        fetch(`http://localhost:5000/addproduct`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            form.reset()
            navigate('/')
        })
        .catch(err => console.log(err.message))


    }
    return (
      <div className="lg:ml-12 mx-12">
        <h1 className="m-4 text-xl font-bold text-slate-400">
          Add Your Product
        </h1>
        <form onSubmit={handleproduct}>
          <div className="flex lg:flex-row flex-col justify-between items-center mb-2 ">
            <p className=" bg-slate-300 lg:w-[200px] w-full py-1 px-2  lg:text-end rounded-l">
              Product Name
            </p>
            <input
              name="name"
              className="w-full focus:outline-none mx-4 p-1"
              type="text"
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center mb-2 ">
            <p className=" bg-slate-300 lg:w-[200px] w-full py-1 px-2  lg:text-end rounded-l">
              Add Selling Price
            </p>
            <input
              name="price"
              className="w-full focus:outline-none mx-4 p-1"
              type="text"
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center mb-2 ">
            <p className=" bg-slate-300 lg:w-[200px] w-full py-1 px-2  lg:text-end rounded-l">
              Add Image Link
            </p>
            <input
              name="image"
              className="w-full focus:outline-none mx-4 p-1"
              type="text"
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-start mb-2 ">
            <p className=" bg-slate-300 lg:w-[200px] w-full py-1 px-2  lg:text-end rounded-l">
              Details
            </p>
            <textarea
              name="detailes"
              className="w-full focus:outline-none lg:mx-4 p-1 rounded"
              id=""
              cols="10"
              rows="4"
            ></textarea>
          </div>

          <div className="text-end">
            <button className="btn btn-primary btn-sm pt-1 px-12 mr-3 mt-6">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddProduct;