import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="password-manager-app-bg">
        <img
          className="app-logo-img"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="top-section-add-password">
          <div className="add-password-container">
            <p className="add-password-heading">Add New Password</p>
            <div className="input-element-logo">
              <img
                className="icons"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                className="user-input-elements"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="input-element-logo">
              <img
                className="icons"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                className="user-input-elements"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="input-element-logo">
              <img
                className="icons"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                className="user-input-elements"
                type="text"
                placeholder="Enter Password"
              />
            </div>
            <div className="add-btn-container">
              <button type="button" className="Add-btn">
                Add
              </button>
            </div>
          </div>
          <img
            className="password-manager"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>

        <div className="bottom-section-passwords">
          <div className="passwords-top-section">
            <p className="passwords-heading">Your Passwords</p>
            <p className="passwords-count-number">0</p>
            <div className="search-icon-input">
              <img
                className="search-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                className="search-input-element"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="check-box-element-container">
            <input className="checkbox" id="checkBox-ele" type="checkbox" />
            <label htmlFor="checkBox-ele">Show Passwords</label>
          </div>
          <img
            className="no-passwords-img"
            alt="no passwords"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
        </div>
      </div>
    )
  }
}

export default PasswordManager
