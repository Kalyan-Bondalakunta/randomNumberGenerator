import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomnum: 0}

  onClickRandomGenerator = () => {
    let {randomnum} = this.state
    randomnum = Math.ceil(Math.random() * 100)
    this.setState({randomnum})
  }

  render() {
    const {randomnum} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a Random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-btn"
            onClick={this.onClickRandomGenerator}
          >
            Generate
          </button>
          <h1 className="random-num">{randomnum}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
