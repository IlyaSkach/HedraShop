import React from 'react';
import './MobileHeader.scss';
import logo from '../Headers/hedralogo.jpg';
import orderIcon from './delivery.png'; 

function MobileHeader({ onOrderClick }) {
  return (
		<>
    <header className="mobile-header">
      <img className="mobile-header__logo" src={logo} alt="Логотип" />
      <button className="mobile-header__order-button" onClick={onOrderClick}>
			<img src={orderIcon} alt="Order Icon" className="mobile-header__order-icon" />Delivery</button>
    </header>
		</>
  );
}

export default MobileHeader;