// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {id, currencyName, currencyLogo, usdValue, euroValue} = currencyDetails
  return (
    <li>
      <div className="flex-list">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="color">{currencyName}</p>
      </div>

      <p className="color">{usdValue}</p>
      <p className="color">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
