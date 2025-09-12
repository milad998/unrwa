import React from 'react'
import Image from "next/image";
import logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-sm px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Image src={logo} width={120} height={60} alt="logo" priority />

        {/* Text */}
        <p className="mb-0 fw-bold text-dark text-capitalize">France</p>
      </div>
    </nav>
  )
}

export default Navbar
