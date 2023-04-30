import {useAuth0} from "@auth0/auth0-react";

import './Profile.css'

export const Profile = () => {
  const {user, logout} = useAuth0()

  const handleLogout = () => logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  })

  return (
    <li className="nav-item dropdown">
      <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div className="user">
          <img className="rounded-circle" src={user?.picture} alt={`Profile picture of ${user?.name}`}/>
          <span>{user?.name}</span>
        </div>
      </button>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <button className="dropdown-item" onClick={handleLogout}>Log out</button>
        </li>
      </ul>
    </li>
  )
}
