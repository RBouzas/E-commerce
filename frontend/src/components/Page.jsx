import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Autenticado from "./Autenticado";

const Navigation = () => {
  const fallback = (
    <>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/registro">Registro</Nav.Link>
    </>
  );
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Technology Heaven</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/carrito">Carrito</Nav.Link>
            <Autenticado fallback={fallback}>
              <Nav.Link href="/logout">Logout</Nav.Link>
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
    <Container className="d-flex flex-column min-vh-100">
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row className="flex-grow-1">{children}</Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Page;
