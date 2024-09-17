import React from 'react';

function Navbar({ changeCategory }) { 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand text-primary font-weight-bold" href="#">News Portal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-outline-primary text-uppercase mx-2" onClick={() => changeCategory('general')}>General</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-outline-primary text-uppercase mx-2" onClick={() => changeCategory('business')}>Business</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-outline-primary text-uppercase mx-2" onClick={() => changeCategory('sports')}>Sports</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
