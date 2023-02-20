import React, {useState} from 'react'
import '../App.css';

const Formulario = () => {

  const [user,setUser] = useState("");
  const [uPass,setUpass] = useState("");

  return (
    <div>
        <form>
          <div className='userDiv'>
            <label htmlFor='user'>Usuario</label>
              <input 
              type='text'
              id='user' 
              name='user'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              />
          </div>
        |   
          <div className='passDiv'>
            <label htmlFor='password'>contraseña</label>
              <input 
              type='password'
              id='pass' 
              name='pass'
              value={uPass}
              onChange={(e) => setUpass(e.target.value)}
              />
          </div>

        </form>   
    </div>
  )
}

export default Formulario;