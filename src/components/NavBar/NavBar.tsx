import {useAuth0} from "@auth0/auth0-react";
import {Profile} from "../Profile/Profile.tsx";

export const NavBar = () => {
  const {isAuthenticated, loginWithRedirect} = useAuth0()

  const handleLogin = () => {
    loginWithRedirect().catch(console.error)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light vw-100 bg-light">
      <a href="/" className="navbar-brand">Recipes</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
              aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ms-auto">
          {
            isAuthenticated ? (
              <Profile/>
            ) : (
              <li className="nav-item">
                <button onClick={handleLogin} className="btn btn-link nav-link active">Login</button>
              </li>
            )
          }
        </ul>
      </div>
    </nav>
  )
}
