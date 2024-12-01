import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSignIn =(e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        signInUser(email,password) 
        .then(result => {
            console.log(result.user);

            // Update Last Login Time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email,lastSignInTime};

            fetch(`http://localhost:5000/users`,{
              method:'PATCH',
              headers:{
                'content-type':'/application.json'
              },
              body:JSON.stringify(loginInfo)

            })
            .then(res => res.json())
            .then(data =>{
              console.log('sign in db',data)
            })
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={ handleSignIn} className="card-body">
            
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
                <button className="btn btn-primary">SignIn</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;