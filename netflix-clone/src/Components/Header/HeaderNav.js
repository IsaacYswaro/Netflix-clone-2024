import React from 'react'
import "./Header.css"


function HeaderNav() {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand className="navLink" href="#home">
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </Navbar.Brand>
            <div className="DropDown">
              <NavDropdown
                title={
                  <span>
                    Browse <ArrowDropDownIcon />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <div className="DropDownContent">
                  <NavDropdown.Item href="#action/3.1">
                    <p>Home </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <p>TVShows</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <p>Movies</p>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.4">
                    <p> New & Popular</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    <p>My List</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    <p>Browse by Languages</p>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav