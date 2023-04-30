import {NavBar} from "components/NavBar/NavBar.tsx";
import {Outlet} from "react-router-dom";

import './root.css'

export const Root = () => (
  <>
    <div className="min-vh-100 d-flex flex-column">
      <NavBar/>
      <div className="container flex-fill d-flex flex-column">
        <Outlet/>
      </div>
    </div>
  </>
)
