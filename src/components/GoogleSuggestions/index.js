// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onClickArrowUpdate = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onClickSearchChange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="image"
            alt="google logo"
          />
        </div>
        <div className="card">
          <div className="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              onChange={this.onClickSearchChange}
              value={searchInput}
            />
          </div>
          <ul>
            {filteredList.map(each => (
              <SuggestionItem
                item={each}
                key={each.id}
                onClickArrowUpdate={this.onClickArrowUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
