import { NavLink,Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  )
}