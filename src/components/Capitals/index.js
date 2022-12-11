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

  onChangingCapital = event => {
    const selectedCapital = event.target.value
    const selectedObj = countryAndCapitalsList.find(
      eachObj => eachObj.capitalDisplayText === selectedCapital,
    )

    this.setState({activeCountryId: selectedObj.id})
  }

  render() {
    const {activeCountryId} = this.state
    const activeCountryObj = countryAndCapitalsList.find(
      eachObj => eachObj.id === activeCountryId,
    )
    console.log(activeCountryObj)
    const {country, capitalDisplayText} = activeCountryObj

    return (
      <div className="app-container">
        <div className="main-card">
          <h1 className="heading">Countries and Capitals</h1>
          <form>
            <select
              name="countries"
              id="countries"
              className="dropdown"
              onChange={this.onChangingCapital}
            >
              {/* <option value={activeCountryId} selected>
                {capitalDisplayText}
              </option> */}
              {countryAndCapitalsList.map(eachObj => (
                <Option optionDetails={eachObj} key={eachObj.id} />
              ))}
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

const Option = props => {
  const optionDetails = props
  const {id, capitalDisplayText} = optionDetails

  return <option value={id}>{capitalDisplayText}</option>
}

export default Capitals
