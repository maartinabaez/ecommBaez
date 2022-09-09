import React from 'react'

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="#">MERAKI Store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active text-white-50" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default navBar