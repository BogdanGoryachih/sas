import  { FC } from 'react'
import Link, { NavLink } from 'react-router-dom'
import logo from   '../assets/viti.png'
const Header :FC = () => {
  return (
   <nav>
    <div className="header flex items-center">
        <div className="logo"><img src={logo} alt="" /></div>
        <ul className='menu'>
            <NavLink to={'/'} ><li className='menu__link'>Home</li></NavLink>
            <NavLink to={'/about'} ><li className='menu__link'>About</li></NavLink>
            <NavLink to={'/contact'} ><li className='menu__link'>Contact</li></NavLink>
        </ul>
    </div>
   </nav>
  )
}

export default Header