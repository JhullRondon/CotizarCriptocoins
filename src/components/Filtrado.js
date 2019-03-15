import React from 'react';

const Filtrado = ({filtrado}) => {

  const {PRICE, CHANGEDAY, CHANGEPCTDAY, HIGHDAY, LOWDAY} = filtrado;

  return (
    <div className='contenido-principal bg-success mt-1 p-3'>
      <h3 className='text-center'>Cotizacion</h3>
      <p className='text-white'>Precio : {PRICE}</p> 
      <p className='text-white'>Más alto del día : {HIGHDAY}</p> 
      <p className='text-white'>Más bajo del día : {LOWDAY}</p> 
      <p className='text-white'>Cambio del día : {CHANGEDAY}</p> 
      <p className='text-white'>Cambio en % del día: {CHANGEPCTDAY} %</p> 
    </div>
  );
};

export default Filtrado;