import React, {useState} from 'react';
import { logIn } from '../../services/user';
import './login-form.css';


const LoginForm = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    return (
      <div className='login-form-container'>
        {
          loading ? 
            "Loading..." :
            <div className="login-form">
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
              />
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
              />
              <button onClick={() => {
                setLoading(true)
                logIn(email, password, setIsLoggedIn)
              }}>
                Логин
              </button>
            </div>
        }
      </div>
    );
};

export default LoginForm;