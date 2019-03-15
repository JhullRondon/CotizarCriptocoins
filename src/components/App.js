import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Axios from 'axios';
import Respuesta from './Respuesta';
import Spinner from './Spinner';

class App extends Component {

  state = {
    resultado: {},
    monedaSelect: '',
    criptoselect: '',
    spiner: false
  }

  cotizarcriptoMoneda = async ({moneda, criptomoneda}) => {
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    
    await Axios.get(url)
      .then(res => {
        this.setState({
          resultado: res.data.DISPLAY[criptomoneda][moneda],
          spiner: true
          })
      });

      setTimeout(() => {
        this.setState({ spiner: false })
      }, 2000)
  }

  render() {
    const titulo = 'Cotiza Criptomonedas al Instante';

    const spin = this.state.spiner ? <Spinner /> : <Respuesta resultado={this.state.resultado}/>;
    return (
      <div className="container">
        <Header titulo={titulo}/>
        
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-light pb-4 contenido-principal'>
            <Form cotizarcriptoMoneda={this.cotizarcriptoMoneda} />
          </div>
        </div>

        <div className='row justify-content-center'>
          {spin}
        </div>
      </div>
    );
  }
}

export default App;
