import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function UpdateStudent () {
  const [nume, setName] = useState('')
  const [email, setEmail] = useState('')
  const [resedinta, setResidence] = useState('')
  const [an, setYear] = useState('')
  const {id} = useParams();
  const navigate = useNavigate();
  
  
    function handleSubmit(event){
      event.preventDefault();
      axios.put('http://localhost:8081/update/'+id, {nume, email, resedinta, an})
      .then(res =>{
        console.log(res);
        navigate('/');
      }).catch(err => console.log(err));
    }
  

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-40 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>

          <h2>Modificare Student</h2>
            <div className='mb-2'>
                <label htmlFor="">Nume</label>
                <input type="text" placeholder='Introduceti Numele' className='form-control' 
                onChange={e => setName(e.target.value)}/>
            </div>

            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Introduceti Emailul' className='form-control' 
                onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='mb-2'>
                <label htmlFor="">Resedinta</label>
                <input type="text" placeholder='Introduceti Resedinta Studentului' className='form-control' 
                onChange={e => setResidence(e.target.value)}/>
            </div>

            <div className='mb-2'>
                <label htmlFor="">Anul</label>
                <input type="text" placeholder='Introduceti Anul de studiu' className='form-control'
                onChange={e => setYear(e.target.value)}/>
            </div>
            
            <button className='btn btn-success'>Modificare</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent 