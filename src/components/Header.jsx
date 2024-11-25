import logo from '../assets/react.svg'
import Menu from './Menu'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Menu />
    </header>
  )
}