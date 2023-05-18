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

// Write your code here

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].id}

  onChangeCountry = event => {
    this.setState({country: event.target.value})
  }

  getCountry = () => {
    const {country} = this.state
    const getCountryName = countryAndCapitalsList.find(
      each => each.id === country,
    )
    return getCountryName.country
  }

  render() {
    const {country} = this.state
    const countryName = this.getCountry(country)

    return (
      <div className="bg-page">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-container">
            <select
              className="select"
              onChange={this.onChangeCountry}
              value={country}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is Capital of which country?</p>
          </div>
          <p className="heading">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
