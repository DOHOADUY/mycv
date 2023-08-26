import Logo from '../assets/image/logo.jpg'
import "./style.css"
const Navbar = () => {
    return (  
      <div className='banner'> 
        <div className='header'>
          <ul className='nav'>
            <li><a href='!#'>HOME</a></li>
            <li><a href='!#'>SERVICES</a></li>
            <li><a href='!#'>PROJECT</a></li>
            <li><a href='!#'>ABOUT</a></li>
            <li><a href='!#'>CONTACT</a></li>
          </ul>
        </div>
        <div className='image'>
          <image src={Logo} alt="logo"/>
        </div>
      </div>
    )
}
 
export default Navbar;