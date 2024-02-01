// Write your code here.
import './index.css'

const WinOrLoseCard = prop => {
  const {score, onPlay} = prop
  const text = score === 12 ? 'Won' : 'Lose'
  const onClick = () => {
    onPlay()
  }

  return (
    <div className="card">
      <div className="game-status">
        <h1 className="heading">You {text}</h1>
        {score === 12 ? (
          <p className="para">Best Score</p>
        ) : (
          <p className="para">Score</p>
        )}
        <p className="count">{score}/12</p>
        <button type="button" className="button" onClick={onClick}>
          Play Again
        </button>
      </div>
      {score === 12 ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="game-img"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="game-img"
          alt="win or lose"
        />
      )}
    </div>
  )
}
export default WinOrLoseCard
