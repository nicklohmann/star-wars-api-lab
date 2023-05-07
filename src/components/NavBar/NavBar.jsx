import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return ( 
    <header>
      <img className='logo' src={ reactLogo } alt="The React Logo" />
      <nav>
          STAR WARS STARSHIPS
      </nav>
    </header>
  )
}

export default NavBar