// Write your code here.
import './index.css'

const NavBar = prop => {
  const {score, topScore, status} = prop
  return (
    <div className="nav">
      <div className="img-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="game-logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {status || score === 12 ? null : (
        <div className="score-con">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
