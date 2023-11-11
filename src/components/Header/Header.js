import React, { useState, useEffect } from 'react';
import './Header.css';
import ArgentBankLogo from '../../assets/argentBankLogo.webp';
import {userPostFetch} from '../../redux/actions/userPostFetch';
import {useDispatch, useSelector} from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userName = useSelector((state) => state.profile.userName);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login'; 
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      dispatch(userPostFetch());
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <header className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {isLoggedIn ? (
          <a className='main-nav-item' href="/logout" onClick={handleLogOut}>
            <i className="fa fa-user-circle"></i>
            {`${userName}`} <i className="fa fa-sign-out"></i> Sign Out
          </a>
        ) : (
          <a className='main-nav-item' href="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </a>
        )}
      </div>
    </header>
  );
  
        }
export default Header
