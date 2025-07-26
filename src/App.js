import './App.css';
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import LogoImage from './assets/images/logo.png';

import Videos from './pages/Videos';
import Community from './pages/Community';

function App() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    
  };

  const [activePage, setActivePage] = useState('Videos');
  const [LogInIsClick, SetLogInIsClick] = useState(false);

  return (
    <div>
      <div className={`LogInBG ${LogInIsClick ? 'visible' : ''}`}>
        <form className='LogInWindow'>
          <h1>Вход  </h1>
          <input placeholder='Логин/Номер/Почта'></input>
          <input placeholder='Пароль'></input>
          <button className='LogIn' type='submit' onClick={() => SetLogInIsClick(!LogInIsClick)}>Войти</button>
          <a href='#'>Нет аккаунта? Войти</a>
        </form>
      </div>

      <header>
        <div className='container'>
          <img src={LogoImage} width={'40px'}></img>
          <nav>
            <ul>
              <li><a href='#'>Записи</a></li>
              <li><a href='#'>Контакты</a></li>
              <li><button className='LogIn' 
                onClick={() =>{ 
                  SetLogInIsClick(!LogInIsClick);}}>Войти</button></li>
            </ul>
          </nav>
          <div class="burger" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <div className={`burgerNAV ${active ? 'open' : ''}`}>
        <ul>
          <li><a href='#'>Записи</a></li>
          <li><a href='#'>Контакты</a></li>
          <li><button href='#' onClick={() => {SetLogInIsClick(!LogInIsClick);setActive(false);}}>Войти</button></li>
        </ul>
      </div>
      <section>
        <div className='container'>
          <nav>
            <Link
              to='/Videos'
              className={activePage === 'Videos' ? 'navLinkActive' : 'navLink'}
              onClick={() => setActivePage('Videos')}
            >
              Видео
            </Link>

            <Link
              to='/Community'
              className={activePage === 'Community' ? 'navLinkActive' : 'navLink'}
              onClick={() => setActivePage('Community')}
            >
              Сообщество
            </Link> 
          </nav>
            <Routes className='routes'>
              <Route path="/" element={<Navigate to="/Videos" replace />} />
              <Route path="/Videos" element={<Videos />} />
              <Route path="/Community" element={<Community />} />
            </Routes>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div>
            <ul>
              <li><img src={LogoImage} width={'40px'}></img></li>
              <li>asasd@gmail.com</li>
              <li>+777 (777) 777 77-77 </li>
              <li>г.Никакой ул.Пустая</li>
            </ul>
          </div>
          <nav>
            <ul>
              <li><a href='#'>Записи</a></li>
              <li><a href='#'>Контакты</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;