import BuildIcon from "@mui/icons-material/Build";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Page from "../components/Page";

const ItemPanel = ({ titulo, descripcion, link, disabled }) => (
  <Col sm={12} md={6} lg={4} xl={3} xxl={2}>
    <Card style={{ height: "15vw" }}>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack className="align-items-end">
          <Button disabled={disabled} variant="secondary" href={link}>
            <BuildIcon />
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  </Col>
);

const AdminPage = () => {
  return (
    <Page>
      <Container>
        <Row>
          <h1>Panel de control</h1>
        </Row>
        <Row>
          <ItemPanel
            titulo="Inventario"
            descripcion="Cree o modifique productos a la venta, stocks, precios..."
            link="/admin/productos"
          />
          <ItemPanel
            titulo="Usuarios"
            descripcion="Controle el acceso a la tienda, cuentas de administración, perfiles de usario..."
            link="#"
            disabled
          />
          <ItemPanel
            titulo="Pedidos"
            descripcion="Consulte el estado de los pedidos e historiales de compra."
            link="#"
            disabled
          />
        </Row>
      </Container>
    </Page>
  );
};

export default AdminPage;
