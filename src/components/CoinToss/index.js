// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
  }

  onClickTossBtn = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)

    let image = ''
    let headsCount = heads
    let tailsCount = tails

    if (toss === 0) {
      image = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      headsCount += 1
    } else {
      image = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      tailsCount += 1
    }
    this.setState({
      img: image,
      heads: headsCount,
      tails: tailsCount,
    })
  }

  render() {
    const {img, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={img} className="image" alt="toss result" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossBtn}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {heads + tails}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
