import React, { Component } from 'react';
import Filtrado from './Filtrado';

class Respuesta extends Component {

  render() {

    const {PRICE, CHANGEDAY, CHANGEPCTDAY, HIGHDAY, LOWDAY} = this.props.resultado;
    const filtrado = {PRICE, CHANGEDAY, CHANGEPCTDAY, HIGHDAY, LOWDAY}
    const renderRespuesta = PRICE ? <Filtrado filtrado={filtrado}/>: '';
    return (
      <div className='col-md-6 p-4'>
         {renderRespuesta}
      </div>
    );
  }
}

export default Respuesta;