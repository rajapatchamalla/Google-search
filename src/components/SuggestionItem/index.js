// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, onClickArrowUpdate} = props
  const {suggestion} = item
  const onclickArrow = () => {
    onClickArrowUpdate(suggestion)
  }

  return (
    <li className="list-item">
      <p className="search-element">{suggestion}</p>
      <button className="button" type="button" onClick={onclickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
