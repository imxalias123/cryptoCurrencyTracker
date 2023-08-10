// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyList} = this.props

    return (
      <div className="container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bitcoin-img"
        />
        <div className="table-container">
          <div className="table-flex">
            <p className="header">Coin Type</p>
            <div className="side-header">
              <p className="header">USD</p>
              <p className="header">EURO</p>
            </div>
          </div>
          <ul>
            {currencyList.map(each => (
              <CryptocurrencyItem currencyDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
