import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function UpdateStudent() 
{

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const {id} =useParams();
    const navigate = useNavigate();

    function handleSubmit(event)
    {
        
        event.preventDefault();
        
        const values={ title, description};

        if(id)
        {
        axios.put('http://localhost:6060/update/'+id,values)
        .then(res =>
            {
               navigate('/student');

            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>


                <div className='mb-2'>
                    <label htmlFor=''>Title</label>
                    <input type="text" placeholder='Enter Title' 
                    autoComplete='off' className='form-control'  
                    onChange={(e)=> setTitle(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Description</label>
                    <input type="text" placeholder='Enter Description' 
                    autoComplete='off'  className='form-control' 
                    onChange={(e)=> setDescription(e.target.value)}/>
                </div>
                <button  className='btn btn-success'>Update</button>
            </form>

        </div>


    </div>
  )
}

export default UpdateStudent;