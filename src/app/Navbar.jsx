import React from 'react'
import Image from "next/image";
import logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary d-flex justify-content-between align-items-center px-3 text-dark" style={{backgroundColor: '#ffffff00'}}>
  <div className="container-fluid">
    <Image src={logo} width={100} alt='logo'/>
    <div>
        <p>france</p>
    </div>
  </div>
</nav>
  )
}

export default Navbar