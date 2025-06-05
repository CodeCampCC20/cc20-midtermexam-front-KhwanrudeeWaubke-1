import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {

  const menus = [
{id: 1, menu : "Home", path: "/" },
{id: 2, menu : "Register", path: "/register" },
{id: 3, menu : "Login", path: "/login" },


  ]
  return (
    <nav className='h-13 bg-gray-700 text-white flex justify-center items-center gap-6 font-bold'>
      {menus.map((item) =>(
        <NavLink key={item.id} to={item.path}>{item.menu}</NavLink>
      ))}

    </nav>
  )
}

export default NavBar