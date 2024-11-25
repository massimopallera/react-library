import logo from '../assets/react.svg'
import Menu from '../components/Menu'

export default function () {
  return (
    <>
      <header>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <Menu />
      </header>
    
      <main>
        <h1>BOOK</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis aliquam optio culpa. Magni eligendi labore nostrum iusto illo tenetur aut, facilis, commodi, nulla molestiae distinctio incidunt quo alias at.</p>
      </main>

      <footer>
        <p>copyright 2024</p>
      </footer>
    </>

  )
}