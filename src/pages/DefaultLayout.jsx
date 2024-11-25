import { Outlet } from "react-router-dom"

import Menu from "../components/Menu"
import Header from "../components/Header"
import Footer from "../components/Footer"

import logo from "../assets/react.svg"


export default function DefaultLayout() {
  return (
      <>
      <Header />
    
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}