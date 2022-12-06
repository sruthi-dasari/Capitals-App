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
  state = {
    activeCountryId: countryAndCapitalsList[0].id,
  }

  render() {
    const {activeCountryId} = this.state
    const activeCountryObj = countryAndCapitalsList.filter(
      eachObj => eachObj.id === activeCountryId,
    )
    console.log(activeCountryObj)
    const {country, capitalDisplayText} = activeCountryObj

    return (
      <div className="app-container">
        <div className="main-card">
          <h1 className="heading">Countries and Capitals</h1>
          <form>
            <select name="countries" id="countries" className="dropdown">
              <option>{capitalDisplayText}</option>
            </select>
            <label className="question-text" htmlFor="countries">
              is capital of which country?
            </label>
          </form>
          <h1 className="country-text">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
