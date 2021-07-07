import React from 'react';
import './Header.css';
import NetflixLogo from'./img/Netflix-Logo.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black})=>{
  return(
      <header className={black ?"black" : ''}>
          <div className="header--logo">
          <a href="/">
            <img src={NetflixLogo} alt="Netflix logo" />
          </a>
          </div>
          <div className="header--user">
              <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
          </div>
      </header>
  )
}