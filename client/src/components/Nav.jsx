import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav className='links'>
        <h3 className='link-title'>Thrill RideShare</h3>
        <div>
          <Link to="/" className="inactive" activeclassname="active">Home</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav