import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const SignUp = () => {


  const {createUser} = useContext(AuthContext);

  const handleSignUp = (e) =>{
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Sign up",name,email,password);

    createUser(email,password)
    .then(result => {
      console.log(result.user);

      const createdAt = result?.user?.metadata?.creationTime;

      const newUser ={
        name,email,createdAt
      }

      // save new user in db
      fetch('http://localhost:5000/users',{

        method:'POST',
        headers:
        {
          'content-type':'application/json'
        },
        body:JSON.stringify(newUser)

      })
      .then(res =>res.json())
      .then(data => {
       
        if(data.insertedId)
        {
          console.log('user created in db');
        }
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });

  }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <form onSubmit={ handleSignUp} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;