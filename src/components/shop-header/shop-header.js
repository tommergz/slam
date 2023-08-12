import React from 'react';
import { useNavigate } from "react-router-dom";
import './shop-header.css';
import { logOut } from '../../services/user';


const ShopHeader = ({isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate();

  function redirectToHome() {
    navigate("/home");
  }

  return (
    <header className='shop-header'>
      <h1 className='logo'>
        Магазин
      </h1>
      <div className='shop-header-navigation'>
        {isLoggedIn && <div className='header-links'>
          <div className='shop-header-link'>
            <div 
              onClick={() => {
                logOut(setIsLoggedIn);
                redirectToHome();
              }}
            >
              <span>
                Выйти
              </span>
            </div>
          </div>
        </div>}
      </div>
    </header>
  );
};

export default ShopHeader;
