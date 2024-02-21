import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  changingOptions = event => {
    const cap = event.target.value
    const filteredCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.capitalDisplayText === cap,
    )
    this.setState({country: filteredCountry[0].country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question">
            <div>
              <select onChange={this.changingOptions}>
                {countryAndCapitalsList.map(eachCountry => (
                  <option
                    key={eachCountry.id}
                    value={eachCountry.capitalDisplayText}
                  >
                    {eachCountry.capitalDisplayText}
                  </option>
                ))}
              </select>
              <span> is capital of which country?</span>
            </div>
            <h1>{country}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
