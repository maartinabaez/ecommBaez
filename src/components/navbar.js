import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
      <div className="container-fluid">
      <a className="navbar-brand text-white" href="#">MERAKI Store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active text-white-50" aria-current="page" href="#">Cremas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">Categoria 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">Categoria 3</a>
          </li>
          </ul>
       </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;