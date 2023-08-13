import React, { useEffect, useState } from 'react';
import { Routes , Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages';
import ShopHeader from '../shop-header/shop-header';
import './app.css';
import LoginPage from '../pages/login-page';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !localStorage.getItem('logged_user')
  );

  useEffect(() => {
    localStorage.setItem('logged_user', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <main className='main'>
      <ShopHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {
        isLoggedIn ?
          <Routes>
            <Route
              path="/home"
              element={ <HomePage /> }
              exact 
            />
            <Route
              path="*"
              element={<Navigate to="/home" replace />}
            />
          </Routes> :
          <Routes>
            <Route
              path="/login"
              element={ <LoginPage setIsLoggedIn={setIsLoggedIn} /> }
              exact 
            />
            <Route
              path="*"
              element={<Navigate to="/login" replace />}
            />
          </Routes>
      }
    </main>
  );
};

export default App;
