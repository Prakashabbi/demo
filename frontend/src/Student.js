import React from 'react'
import { useEffect,useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
function  Student() {
   
    const[student,setStudent]=useState([])
    const [isMark, setIsMark] = useState(true);


    useEffect(() =>
    {
    axios.get('http://localhost:6060')
        .then(res => setStudent(res.data))
        .catch(err=> console.log(err));

    }, [])

    const handleToggle = () => {
        setIsMark(!isMark);
      };

    const handleDelete= async(id)=>
    {
        try{
            await axios.delete('http://localhost:6060/student/'+id)
            window.location.reload()
        }
        catch(err)
        {
            console.log(err);
        }
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-4'>
<Link to="/create" className='btn btn-success'>Add +</Link>
<table className='table'>
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            student.map((data , index)=>(
                <tr key={index}>
                   
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>
                    <button className='btn btn-info me-3' onClick={handleToggle}>
                            {isMark ? 'Mark as completed' : 'Mark as incompleted'}
                    </button>
                        <Link to={`/update/${data.id}`} className='btn btn-primary'>Update</Link>
                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.id)}>Delete</button>
                    </td>
                </tr>
            ))
        }

    </tbody>

</table>
        </div>

    </div>
  )
}

export default Student