// Write your code here.
import './index.css'

const EmojiCard = prop => {
  const {emojiList, onClick} = prop
  const {emojiUrl, emojiName, id} = emojiList
  const on = () => {
    onClick(id)
  }
  return (
    <li className="emoji-card">
      <button type="button" className="btn" onClick={on}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
