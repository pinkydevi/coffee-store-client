
import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  
  const links = 
  <>
  <NavLink to="/"  className="bg-green-300 p-5 ">Home</NavLink>
  <NavLink to="/addCoffee"  className="bg-green-300 p-5">Add Coffee</NavLink>
  <NavLink to="/users"  className="bg-green-300 p-5">User</NavLink>
  
  </>



  return (
    <div className='m-20'>
     
      <h1>Hot Hot Coffee :{coffees.length}</h1>
      <nav className='justify-center items-center   mb-20'>{links}</nav>
      
      <div className='grid md:grid-cols-2'>
        
           {
            coffees.map(coffee =><CoffeeCard 
              key={coffee._id}
              coffee={coffee}
              
              ></CoffeeCard>)
          }
       
      </div>

      
    </div>
  )
}

export default App
