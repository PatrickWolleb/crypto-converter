import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BFX from 'bitfinex-api-node'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        ticker: {
          input: 'iota',
          iota: '4.12345',
          usd: '1.0',
          chf: '1.12345'
        }
    }
    console.log(this)
  }

  componentDidMount() {
    this.config = {
      bfx: {
        key: 'xy5Cmy4Ss64Ooj6pK4WXdJk7aqb2r6ueP4gPbjOZ6vr',
        secret : 'EDIAcVMvFydIqflv4bv5h38F3BJ1eCVeQoqYtNslWXF'
      }
    }

  }

  onInputAmountChange = (e) => {
    this.state.ticker.iota = e.target.value.toString()
  }

  updateData(e) {
    const ticker = this.state.ticker
    console.log(ticker)     
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crypto Converter</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="converter">
          

          <div>
            {/*<label for="input_amount">Your IOTAs</label>*/}
            <input
              id="input-amount"  
              type="text" onChange={this.onInputAmountChange} />
          </div>
          

          <span className="currency">{this.state.ticker.iota}</span>
          <span className="currency">{this.state.ticker.usd}</span>
          <span className="currency">{this.state.ticker.chf}</span>  
        

        </div>

      </div>
    );
  }
}

export default App;
