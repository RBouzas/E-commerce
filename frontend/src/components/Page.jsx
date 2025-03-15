import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Autenticado from "./Autenticado";

import logo from "../techheaven.png";

const NavLink = ({ to, children }) => (
  <Link className="text-decoration-none" to={to}>
    <Nav.Link as="div">{children}</Nav.Link>
  </Link>
);

const Navigation = () => {
  const fallback = (
    <>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/registro">Registro</Nav.Link>
    </>
  );
  return (
    <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Link className="text-decoration-none" to="/">
          <Navbar.Brand as="div">
            <Image width={50} height={50} src={logo} />
            Technology Heaven
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/carrito">Carrito</NavLink>
            <Autenticado>
              <NavLink to="/deseados">Deseados</NavLink>
              <NavLink to="/favoritos">Favoritos</NavLink>
            </Autenticado>
            <Autenticado rol="ADMIN">
              <NavLink to="/admin">Administración</NavLink>
            </Autenticado>
            <Autenticado fallback={fallback}>
              <NavLink to="/logout">Logout</NavLink>
            </Autenticado>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>Página web creada por Rodrigo Bouzas</Col>
        <Col>Proyecto final</Col>
      </Row>
    </Container>
  );
};

const Page = ({ children }) => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 gap-4">
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col>
          <Container>{children}</Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
