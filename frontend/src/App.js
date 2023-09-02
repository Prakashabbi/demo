import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Student from './Student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';
import Login from './Login';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>

        <Route path='/student' element={<Student />}></Route>
        <Route path='/create' element={<CreateStudent />}></Route>
        <Route path='/update/:id' element={<UpdateStudent />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App