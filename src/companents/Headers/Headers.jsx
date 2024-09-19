import React, { useState } from 'react';
import './Header.scss';
import Modals from '../Modals/Modals';
import MobileHeader from '../MobileHeader/MobileHeader';
import Shops from '../Shops/Shops'; // Импортируем компонент Shops
import logo from './hedralogo.jpg';
import spiritsImg from './spirits.png';
import wineImg from './wine.png';
import beerImg from './beer.png';
import rtdImg from './rtd.png';
import snacksImg from './snacks.png';
import orderIcon from './delivery.png'; 

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Добавляем состояние для активного раздела

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleLogoClick = () => {
    setActiveSection(null); // Сбрасываем активный раздел
  };

  return (
    <>
      <MobileHeader onOrderClick={handleOrderClick} />
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" onClick={handleLogoClick} />
        <nav className="header__menu">
          <ul>
            <li>
              <a href="#home" onClick={() => handleSectionClick('spirits')}>
                <img src={spiritsImg} alt="SPIRITS" />
                SPIRITS
              </a>
            </li>
            <li>
              <a href="#shop" onClick={() => handleSectionClick('wine')}>
                <img src={wineImg} alt="WINE" />
                WINE
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handleSectionClick('beer')}>
                <img src={beerImg} alt="BEER" />
                BEER
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleSectionClick('rtd')}>
                <img src={rtdImg} alt="RTD" />
                RTD
              </a>
            </li>
            <li>
              <a href="#faq" onClick={() => handleSectionClick('snacks')}>
                <img src={snacksImg} alt="SNACKS" />
                SNACKS
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__order-button" onClick={handleOrderClick}>
        <img src={orderIcon} alt="Order Icon" className="header__order-icon" />
          delivery</button>
        {isModalOpen && <Modals onClose={handleCloseModal} />}
      </header>
      {activeSection === 'spirits' && <Shops section="spirits" />}
      {activeSection === 'wine' && <Shops section="wine" />}
      {activeSection === 'beer' && <Shops section="beer" />}
      {activeSection === 'rtd' && <Shops section="rtd" />}
      {activeSection === 'snacks' && <Shops section="snacks" />}
      {activeSection === null && <div></div>} 
    </>
  );
}

export default Header;