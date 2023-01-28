import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordComponent from '../PasswordComponent/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'vividOrange',
  'green-cyan',
  'orange',
  'green',
  'strong-red',
]

class PasswordManager extends Component {
  state = {
    websiteName: '',
    userName: '',
    password: '',
    passwordItemsList: [],
    showPassword: false,
    searchText: '',
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  saveWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  saveUsername = event => {
    this.setState({userName: event.target.value})
  }

  savePassword = event => {
    this.setState({password: event.target.value})
  }

  createPasswordItem = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    const initialBackgroundColorClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const passwordObj = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      passwordItemsList: [...prevState.passwordItemsList, passwordObj],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  deletePassword = id => {
    const {passwordItemsList} = this.state
    const filteredPasswordList = passwordItemsList.filter(
      eachPasswordItem => eachPasswordItem.id !== id,
    )
    this.setState({passwordItemsList: filteredPasswordList})
  }

  saveSearch = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {
      passwordItemsList,
      websiteName,
      userName,
      password,
      showPassword,
      searchText,
    } = this.state

    const filteredPasswords = passwordItemsList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchText.toLowerCase()),
    )

    const NoPasswordSection = (
      <div className="no-passwords-section">
        <img
          className="no-passwords-img"
          alt="no passwords"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        />
        <p className="no-password-text">No Passwords</p>
      </div>
    )
    const passwordItem = (
      <ul className="password-details-list">
        {filteredPasswords.map(eachItem => (
          <PasswordComponent
            key={eachItem.id}
            passwordItemsList={eachItem}
            showPassword={showPassword}
            deletePassword={this.deletePassword}
          />
        ))}
      </ul>
    )

    return (
      <div className="password-manager-app-bg">
        <img
          className="app-logo-img"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="top-section-add-password">
          <div className="add-password-container">
            <h1 className="add-password-heading">Add New Password</h1>
            <form onSubmit={this.createPasswordItem}>
              <div className="input-element-logo">
                <img
                  className="icons"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  value={websiteName}
                  onChange={this.saveWebsite}
                  placeholder="Enter Website"
                  type="text"
                  className="user-input-elements"
                />
              </div>

              <div className="input-element-logo">
                <img
                  className="icons"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  value={userName}
                  onChange={this.saveUsername}
                  className="user-input-elements"
                  type="text"
                  placeholder="Enter Username"
                />
              </div>

              <div className="input-element-logo">
                <img
                  className="icons"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  value={password}
                  onChange={this.savePassword}
                  className="user-input-elements"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>

              <div className="add-btn-container">
                <button type="submit" className="Add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            className="password-manager"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>

        <div className="bottom-section-passwords">
          <div className="passwords-top-section">
            <h1 className="passwords-heading">Your Passwords</h1>
            <p className="passwords-count-number">{passwordItemsList.length}</p>
            <div className="search-icon-input">
              <img
                className="search-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                onChange={this.saveSearch}
                className="search-input-element"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="check-box-element-container">
            <input
              onClick={this.toggleShowPassword}
              className="checkbox"
              id="checkBox-ele"
              type="checkbox"
            />
            <label className="show-password-label" htmlFor="checkBox-ele">
              Show Passwords
            </label>
          </div>
          {filteredPasswords.length > 0 ? passwordItem : NoPasswordSection}
        </div>
      </div>
    )
  }
}

export default PasswordManager
