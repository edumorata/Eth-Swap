import React, { Component } from 'react';
import tokenLogo from '../token-logo.png'
import ethLogo from '../eth-logo.png'


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
          output: '0'
        }
      }

  render() {
    return (
        <div id="content" className="mt-3">
  
          <div className="d-flex justify-content-between mb-3">
            <button
                className="btn btn-light"
                onClick={(event) => {
                  this.setState({ currentForm: 'buy' })
                }}
              >
              Buy
            </button>
            <span className="text-muted">&lt; &nbsp; &gt;</span>
            <button
                className="btn btn-light"
                onClick={(event) => {
                  this.setState({ currentForm: 'sell' })
                }}
              >
              Sell
            </button>
          </div>
  
          <div className="card mb-4" >
  
            <div className="card-body">
  
                <form className="mb-3" onSubmit={(event) => {
                    event.preventDefault()
                    let etherAmount
                    etherAmount = this.input.value.toString() //Cogemos la cantidad de ETH desde el imput
                    etherAmount = window.web3.utils.toWei(etherAmount, 'Ether') //Lo transformamos a Ether
                    this.props.buyTokens(etherAmount) //Lo compramos 
                }}>
                    <div>
                    <label className="float-left"><b>Input</b></label>
                    <span className="float-right text-muted">
                        Balance: {window.web3.utils.fromWei(this.props.ethSwapBalance, 'Ether')}
                    </span>
                    </div>
                    <div className="input-group mb-4">
                    <input
                        type="text"
                        onChange={(event) => {
                            const etherAmount = this.input.value.toString()
                            this.setState({
                                output: etherAmount * 100//seteamos el state para cogerlo en el otro input
                            })
                        }}
                        ref={(input) => { this.input = input }}
                        className="form-control form-control-lg"
                        placeholder="0"
                        required />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <img src={ethLogo} height='32' alt=""/>
                        &nbsp;&nbsp;&nbsp; ETH
                        </div>
                    </div>
                    </div>
                    <div>
                    <label className="float-left"><b>Output</b></label>
                    <span className="float-right text-muted">
                        Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
                    </span>
                    </div>
                    <div className="input-group mb-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="0"
                        value={this.state.output} //mostramos el output
                        disabled
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <img src={tokenLogo} height='32' alt=""/>
                        &nbsp; DApp
                        </div>
                    </div>
                    </div>
                    <div className="mb-5">
                    <span className="float-left text-muted">Exchange Rate</span>
                    <span className="float-right text-muted">1 ETH = 100 DApp</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">SWAP!</button>
                </form>
  
            </div>
  
          </div>
  
        </div>
      );
  }
}

export default Main;
