import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
function App()
{
    const navigate=useNavigate();

  const [userRegistration,setUserRegistration]=useState(
    {
    username:"",
    password:""
  })

const handleClick=(e)=>
{
  const name=e.target.name;
  const value=e.target.value;
  //set to state
  setUserRegistration({...userRegistration,[name]:value});
}

const handleSubmit=(e)=>
{
    navigate("/student");
}


  return(
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'> 
    <center>
    <div className='p-5 rounded bg-light my-5 w-75 box' >
    <h1 className="text-center" ><u>Login Form </u></h1>
    <div className="justify-content-center align-items-center ">
        
       <form onSubmit={handleSubmit}>
       <div className="row w-50 mx-auto">
        <label htmlFor="username" className="my-3 fontSize">Enter Username</label>
        <input type="text" name="username" autoComplete="off" 
              className="form-control border-primary textCenter"
              placeholder='please enter admin'
              value={userRegistration.username}
              onChange={handleClick}
              required/>
    
        <label htmlFor="password" className="my-3 fontSize">Enter Password:</label>
        <input type="password" name="password" autoComplete="off" 
               className="form-control border-primary textCenter"
               placeholder='please enter admin' 
               value={userRegistration.password}
               onChange={handleClick}
               required/>
    
        

        <button className="btn btn-warning my-4 w-100"> submit </button>
        </div> 

        </form> 
    </div>    
    </div>
</center>
</div>
  )

}
export default App;