import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className='text-center p-5 bg-dark text-white'>
            <Image
                src="/footer-logo.png"
                alt="..."
                width={50}
                height={70}
                    />
        <p className='my-3'>© UNRWA 2025</p>
        <div className="d-flex justify-content-center align-items-center " style={{fontSize: '9px'}}>
            <a className="nav-link active mx-3" aria-current="page" href="#">Zakat Impact Report</a>
            <a className="nav-link mx-1" href="#">FAQs</a>
            <a className="nav-link mx-1" href="#">My Account</a>
            <a className="nav-link disabled mx-1" aria-disabled="true">Privacy Policy</a>
            <a className="nav-link mx-1" href="#">Contact Us BankTransfers</a>
      </div>
    </div>
  )
}

export default Footer
