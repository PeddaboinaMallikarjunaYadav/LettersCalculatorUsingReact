import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="cardContainer">
        <div className="leftContent">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="textinput" className="label">
            Enter the phrase
          </label>
          <input
            id="textinput"
            className="input"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
          />
          <p className="letters">No.of letters: {count}</p>
        </div>
        <div className="rigthImage">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
