
import Menu from "../components/Menu"
import { Outlet } from "react-router-dom"

import logo from "../assets/react.svg"

export default function DefaultLayout() {
  return (
      <>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Menu />
      </header>
    
      <main>
        <Outlet />
      </main>

      <footer>
        <p>copyright 2024</p>
      </footer>
    </>
  )
}