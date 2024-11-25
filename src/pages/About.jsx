import logo from '../assets/react.svg'


export default function () {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/books">Books</a>
          <a href="/about">About</a>
          <a href="/contacts">Contacts</a>
        </nav>
      </header>
      
      <main>
        <h1>ABOUT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis aliquam optio culpa. Magni eligendi labore nostrum iusto illo tenetur aut, facilis, commodi, nulla molestiae distinctio incidunt quo alias at.</p>
      </main>

      <footer>
        <p>copyright 2024</p>
      </footer>
    </>

  )
}