import './index.css'

const PasswordComponent = props => {
  const {passwordItemsList, showPassword, deletePassword} = props
  const {
    websiteName,
    userName,
    password,
    id,
    initialClassName,
  } = passwordItemsList

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
      <div className={`website-initial-container  ${initialClassName}`}>
        <p className="website-icon">{websiteName[0].toUpperCase()}</p>
      </div>

      <div className="user-password-details-container">
        <p className="website-name">{websiteName}</p>
        <p className="username">{userName}</p>
        <p className="password">{showHidePassword}</p>
      </div>
      <button
        // eslint-disable-next-line react/no-unknown-property
        testid="delete"
        onClick={deletePasswordItem}
        type="button"
        className="delete-btn"
      >
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
