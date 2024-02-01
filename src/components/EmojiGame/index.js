/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    list: this.props,
    status: false,
    score: 0,
    topScore: 0,
    filterList: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlay = () => {
    const {score, topScore} = this.state
    this.setState({status: false, score: 0, filterList: []})
    if (score >= topScore) {
      this.setState({topScore: score})
    } else {
      this.setState(prev => ({topScore: prev.topScore}))
    }
  }

  onClick = id => {
    const {filterList} = this.state
    const emojisList = this.shuffledEmojisList()
    const filterEmoji = emojisList.filter(each => each.id === id)
    if (filterList.includes(id)) {
      this.setState({status: true})
    } else {
      this.setState(prev => ({
        list: {emojisList},
        filterList: [...prev.filterList, filterEmoji[0].id],
        score: prev.score + 1,
      }))
    }
  }

  render() {
    const {list, status, score, topScore} = this.state
    const {emojisList} = list
    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} status={status} />
        {status || score === 12 ? (
          <div className="win-lose-card">
            <WinOrLoseCard score={score} onPlay={this.onPlay} />
          </div>
        ) : (
          <ul className="ul">
            {emojisList.map(each => (
              <EmojiCard
                emojiList={each}
                key={each.id}
                onClick={this.onClick}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default EmojiGame
