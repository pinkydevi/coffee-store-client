import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id,name, quantity, supplier, taste, category, details, photo } = coffee;


    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
      
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
      
        const updateCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updateCoffee);
      
        // Send Data To Server
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // Move Swal.fire inside this block
            if (data.modifiedCount>0) {
              Swal.fire({
                title: 'Success',
                text: 'Coffee updated Successfully',
                icon: 'success', // Use lowercase 'success'
                confirmButtonText: 'Cool',
              });
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            Swal.fire({
              title: 'Error',
              text: 'Failed to add coffee. Please try again.',
              icon: 'error',
              confirmButtonText: 'Okay',
            });
          });
      };
    return (
        <div>
            <form onSubmit={handleUpdateCoffee} className="p-24 bg-blue-200">
                <div >
                    <h1 className="text-3xl font-bold mb-5">Update New Coffee</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nisi soluta quis dolorum est reprehenderit aliquam ipsam deserunt obcaecati impedit deleniti, error nesciunt illo, minus earum cupiditate qui recusandae nostrum!</p>

                    {/* Form name and quantity Row  */}
                    <div className='md:flex '>
                      <div className="form-control w-1/2 ml-5">
                      <label className="label">
                       <span className="label-text text-2xl text-orange-700 font-bold"> Coffee Name</span>
                        </label>
                        
                        <label className='input-group'>
                        <input type="text" name="name" defaultValue={name} className="input input-bordered w-full gap-7 " placeholder='Coffee Name' />
                        </label>
                            

                      </div>
                       
                      <div className="form-control w-1/2 ml-5">
                      <label className="label">
                       <span className="label-text text-2xl font-bold text-orange-700"> Coffee Quantity</span>
                        </label>
                        
                        <label className='input-group'>
                        <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered w-full" placeholder='Coffee Quantity' />
                        </label>
                            

                      </div>
                    </div>

                      {/* Form Form Supplier and Taste Row   */}
                      <div className='md:flex '>
                      <div className="form-control w-1/2 ml-5 ">
                      <label className="label">
                       <span className="label-text text-2xl text-orange-700 font-bold"> Supplier</span>
                        </label>
                        
                        <label className='input-group'>
                        <input type="text" name="supplier" defaultValue={supplier}  className="input input-bordered w-full  " placeholder='Supplier' />
                        </label>
                            

                      </div>
                       
                      <div className="form-control w-1/2 ml-5">
                      <label className="label">
                       <span className="label-text text-2xl font-bold text-orange-700"> Coffee Taste</span>
                        </label>
                        
                        <label className='input-group'>
                        <input type="text" name="taste" defaultValue={taste} className="input input-bordered w-full" placeholder='Taste' />
                        </label>
                            

                      </div>
                    </div>

                      {/* Form Category and Details Row  */}
                      <div className='md:flex '>
                      <div className="form-control w-1/2 ml-5">
                      <label className="label">
                       <span className="label-text text-2xl text-orange-700 font-bold"> Category</span>
                        </label>
                        
                        <label className='input-group'>
                        <input type="text" name="category" defaultValue={category} className="input input-bordered w-full  " placeholder='Category' />
                        </label>
                            

                      </div>
                       
                      <div className="form-control w-1/2 ml-5">
                      <label className="label">
                       <span className="label-text text-2xl font-bold text-orange-700">Details</span>
                        </label>
                        
                        <label className='input-group'>
                        <input type="text" name="details" defaultValue={details} className="input input-bordered w-full" placeholder='Details' />
                        </label>
                            

                      </div>
                    </div>

                      {/* Form Photo Row  */}
                      <div className='mb-5'>
                      <div className="form-control w-full ">
                      <label className="label">
                       <span className="label-text text-2xl text-orange-700 font-bold"> Photo</span>
                        </label>
                        
                        <label className='input-group'>
                        <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full gap-7 " placeholder='Photo' />
                        </label>
                            

                      </div>

                      
                       
                     
                    </div>

                    <div className="form-control">
                    <input type="submit" className="bg-orange-500 w-full" value="Update Coffee" />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default UpdateCoffee;