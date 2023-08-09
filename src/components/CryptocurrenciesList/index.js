// Write your JS code here
import {Component} from 'react'
import CrytocurrencyItem from '../CrytocurrencyItem'
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
          <p>Coin Type</p>
          <div>
            <p>USD</p>
            <p>EURO</p>
          </div>

          <ul>
            {currencyList.map(each => (
              <CrytocurrencyItem currencyDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
