import './index.css'

const PasswordComponent = props => {
  const {passwordItemsList, showPassword, deletePassword} = props
  const {websiteName, userName, password, id} = passwordItemsList

  //   const colours = [#f59e0b,#10b981,#f97316,#14b8a6, #b91c1c,#0ea5e9]

  const showHidePassword = showPassword ? (
    password
  ) : (
    <img
      className="stars"
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    />
  )

  const deletePasswordItem = () => {
    deletePassword(id)
  }

  return (
    <li className="password-list-element">
      <p className="website-icon">Y</p>
      <div className="user-password-details-container">
        <p className="website-name">{websiteName}</p>
        <p className="username">{userName}</p>
        <p className="password">{showHidePassword}</p>
      </div>
      <button onClick={deletePasswordItem} type="button" className="delete-btn">
        <img
          className="delete-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordComponent
