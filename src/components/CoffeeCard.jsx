import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
  const { _id,name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete =(_id) =>{

    console.log(_id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
            if (result.isConfirmed) {
         
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.deletedCount > 0)
            {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
        

            }
        })
        }
      });

  }

  return (
    <div>
      <div className="card card-side bg-base-200 mb-10 shadow-xl ml-10">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="flex justify-between">
         <div>
         <h2 className='text-2xl font-bold'>{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Category: {category}</p>
          <p>Details: {details}</p>
         </div>
          <div className="card-actions justify-end ">
         <div className=' btn-group btn-group-vertical '>
         <button className="btn btn-success mb-5">View</button>
          <br />
          <button onClick={() => handleDelete(_id)} className="btn btn-error mb-5">Delete</button>

          <Link to={`/updateCoffee/${_id}`} className="btn btn-warning mb-5">Update</Link>
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
