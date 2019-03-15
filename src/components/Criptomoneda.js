import React from 'react';

const Criptomoneda = ({coin}) => {
  return (
    <option value={coin.CoinInfo.Name}>{coin.CoinInfo.FullName}</option>
  );
};

export default Criptomoneda;