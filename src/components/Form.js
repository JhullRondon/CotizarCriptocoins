import React, { Component } from 'react';
import Axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Err from './Err';

class Form extends Component {

  state = {
    crytoCoins: [],
    moneda: '',
    criptomoneda: '',
    error: false
  }

  async componentWillMount() {
    const url =`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    const res = await Axios.get(url);

    this.setState({
      crytoCoins: res.data.Data
    })
  }
  
  // leer datos de formulario cuando cambian y agregarlos al state
  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  // validar que el usuario elija monedas
  cotizarMoneda = (e) => {
    e.preventDefault();

    const {moneda, criptomoneda} = this.state;
    
    if ( moneda ==='' || criptomoneda==='') {
      this.setState({
        error: true
      }, () => {
        setTimeout(()=>{
          this.setState({
            error: false
          })
        }, 3000);
      });
      return;
    }

    const cotizacion = {
      moneda,
      criptomoneda
    }


    this.props.cotizarcriptoMoneda(cotizacion);

  }

  render() {
    const mensaje = (this.state.error) ? 
    <Err mensaje='Se deben seleccionar las 2 monedas'/>:
    '';

    return (
      <form onSubmit={this.cotizarMoneda}>
        <div className='form-group'>
          <label>Moneda: </label>
          <select name='moneda' onChange={this.handleChange} className='form-control'>
            <option value='' desabled='true' defaultValue>Selecciona tu moneda: </option>
            <option value='USD'>Dolar Estadounidense</option>
            <option value='MXN'>Peso Mexicano</option>
            <option value='PEN'>Nuevo Sol</option>
            <option value='GBP'>Libras</option>
            <option value='EUR'>Euros</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Criptomoneda</label>
          <select name='criptomoneda' onChange={this.handleChange} className='form-control'>
            <option value=''>Elige tu moneda</option>
            {Object.keys(this.state.crytoCoins).map(key => (
            <Criptomoneda key= {key} coin={this.state.crytoCoins[key]} />
          ))}
          </select>
        </div>

        <div className='form-group'>
          <input type='submit' className='btn btn-primary' value='Cotizar' />
        </div>

        {mensaje}
      </form>
    );
  }
}

export default Form;