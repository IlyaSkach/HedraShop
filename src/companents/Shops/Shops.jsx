import React from 'react';
import './Shops.scss';

// import SPI1 from './Spirits/SPI_1.png';
// import SPI2 from './Spirits/SPI_2.png';
// import SPI3 from './Spirits/SPI_3.png';
// import WINE1 from './Wine/WINE_1.png';
// import WINE2 from './Wine/WINE_2.png';
// import WINE3 from './Wine/WINE_3.png';
// import BEER1 from './Beer/BEER_1.png';
// import BEER2 from './Beer/BEER_2.png';
// import BEER3 from './Beer/BEER_3.png';
// import RTD1 from './RTD/RTD_1.png';
// import RTD2 from './RTD/RTD_2.png';
// import RTD3 from './RTD/RTD_3.png';
// import SNACKS1 from './Snacks/SNACKS_1.png';
// import SNACKS2 from './Snacks/SNACKS_2.png';
// import SNACKS3 from './Snacks/SNACKS_3.png';

import SP1 from '../Headers/spirits.png';
import WINE1 from '../Headers/wine.png';
import BEER1 from '../Headers/beer.png';
import RTD1 from '../Headers/rtd.png';

const products = {
  spirits: [
    { id: 1, name: 'Раздел в разработке, ассортимент можете узнать при заказе', price: 'This section is under development, you can find out the range when ordering', image: SP1 },
    // { id: 2, name: 'Gin', price: '300 L.E', image: SPI2 },
    // { id: 3, name: 'Whiskey', price: '500 L.E', image: SPI3 },
  ],
  wine: [
    { id: 1, name: 'Раздел в разработке, ассортимент можете узнать при заказе', price: 'This section is under development, you can find out the range when ordering', image: WINE1 },
    // { id: 2, name: 'Rose Wine', price: '25 L.E', image: WINE2 },
    // { id: 3, name: 'Sparking Wine', price: '20 L.E', image: WINE3 },
  ],
  beer: [
    { id: 1, name: 'Раздел в разработке, ассортимент можете узнать при заказе', price: 'This section is under development, you can find out the range when ordering', image: BEER1 },
    // { id: 2, name: 'Ale', price: '$12', image: BEER2 },
    // { id: 3, name: 'Lager', price: '$10', image: BEER3 },
  ],
  rtd: [
    { id: 1, name: 'Раздел в разработке, ассортимент можете узнать при заказе', price: 'This section is under development, you can find out the range when ordering', image: RTD1 },
    // { id: 2, name: 'Mocktail', price: '$10', image: RTD2 },
    // { id: 3, name: 'Cocktail', price: '$15', image: RTD3 },
  ],
  // snacks: [
  //   { id: 1, name: 'Chips', price: '$5', image: SNACKS1 },
  //   { id: 2, name: 'Nuts', price: '$7', image: SNACKS2 },
  //   { id: 3, name: 'Nuts', price: '$7', image: SNACKS3 },
  // ],
};

function Shops({ section }) {
  return (
    <div className="shops">
      <h2 className='shops__title'>{section.toUpperCase()}</h2>
      <div className="shops__products">
        {products[section].map(product => (
          <div key={product.id} className="shops__product-card">
            <img src={product.image} alt={product.name} className="shops__product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shops;