import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-5">
      {/* Logo */}
      <div className="mb-3">
        <Image
          src="/footer-logo.png"
          alt="UNRWA Logo"
          width={60}
          height={80}
          priority
        />
      </div>

      {/* CopyRight */}
      <p className="mb-4">© UNRWA 2025</p>

      {/* Links */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <a className="text-white text-decoration-none small fw-light footer-link" href="#">
          Zakat Impact Report
        </a>
        <a className="text-white text-decoration-none small fw-light footer-link" href="#">
          FAQs
        </a>
        <a className="text-white text-decoration-none small fw-light footer-link" href="#">
          My Account
        </a>
        <a className="text-secondary text-decoration-none small fw-light" aria-disabled="true">
          Privacy Policy
        </a>
        <a className="text-white text-decoration-none small fw-light footer-link" href="#">
          Contact Us Bank Transfers
        </a>
      </div>

      {/* Extra style for hover */}
      <style jsx>{`
        .footer-link:hover {
          text-decoration: underline;
          color: #0dcaf0; /* Bootstrap info color */
        }
      `}</style>
    </footer>
  )
}

export default Footer
