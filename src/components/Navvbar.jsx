import React from 'react';
import { Container, Navbar, NavbarBrand , Nav, Offcanvas } from 'react-bootstrap';
import "../App.css";
export default function Navvbar(props) {
  return (
        <Navbar bg = "dark" variant = "dark" expand="lg">
            <Container>
              <NavbarBrand href = '/' fixed = "top" className = "btn">{props.title}</NavbarBrand>
              <Nav className="me-auto my-1">
                <Nav.Link href = "https://vk.com/lvchdv" className = "item" >Автор проекта: Федос</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href = "https://www.macmillaneducationeverywhere.com/" className = "forMac item">Для издательства Macmillan StudentsBook</Nav.Link>
              </Nav>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel" className = "menu__tittle">Book Translator</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className = "nav__text">Автор проекта: Федос</Nav.Link>
                    <Nav.Link className = "nav__text">Для издательства Macmillan StudentsBook</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
        </Navbar>
  );
}
