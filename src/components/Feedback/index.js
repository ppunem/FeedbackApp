// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  changeClickedStatus = () => {
    this.setStatus({isClicked: true})
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
        <p className="thank-text">Thank You!</p>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  renderEmojis = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <>
        <h1 className="head">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(each => (
            <li className="emoji-container" key={each.id}>
              <button type="button" onClick={this.changeClickedStatus}>
                <img src={each.imageUrl} alt={each.name} className="emoji" />
              </button>
              <p className="name">{each.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isClicked} = this.state

    return (
      <div className="bg">
        <div className="card">
          {!isClicked ? this.renderEmojis() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
