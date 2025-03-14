import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Link } from "react-router-dom";
import useCrearProducto from "../client/useCrearProducto";
import AccesoRestringido from "../components/AccesoRestringido";
import Autenticado from "../components/Autenticado";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";

const ReportSuccess = ({ nombre, show, onHide }) => {
  return (
    <Toast
      onClose={() => onHide()}
      show={show}
      delay={3000}
      autohide
      bg="success"
    >
      <Toast.Header>
        <strong className="me-auto">Creación completada</strong>
      </Toast.Header>
      <Toast.Body>
        Se han registrado los datos de <strong>{nombre}</strong>.
      </Toast.Body>
    </Toast>
  );
};

const AdminCrearProductoPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const { request: requestCrear } = useCrearProducto();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  return (
    <Page>
      <TituloPagina>Nuevo producto</TituloPagina>
      <Autenticado rol="ADMIN" fallback={<AccesoRestringido />}>
        <Form
          onSubmit={(event) => {
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);

            requestCrear({ body: JSON.stringify(data) }).then(() =>
              setShowSuccess(true)
            );
            event.preventDefault();
          }}
        >
          <ToastContainer className="p-3" position="top-end">
            <ReportSuccess
              show={showSuccess}
              onHide={() => setShowSuccess(false)}
              nombre={nombre}
            />
          </ToastContainer>
          <Container className="d-grid row-gap-5">
            <Row>
              <Col>
                <Image className="invisible" src="" />
              </Col>
              <Col>
                <Container className="d-grid row-gap-4">
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          name="nombre"
                          id="admin-producto-nombre"
                          placeholder="Nombre del producto..."
                          value={nombre}
                          onChange={(event) => setNombre(event.target.value)}
                          required
                        ></Form.Control>
                        <Form.Text>
                          Nombre, marca y modelo de este producto.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                          name="descripcion"
                          id="admin-producto-descripcion"
                          placeholder="Descripción del producto..."
                          value={descripcion}
                          as="textarea"
                          rows={5}
                          required
                          onChange={(event) =>
                            setDescripcion(event.target.value)
                          }
                        ></Form.Control>
                        <Form.Text>
                          Descripción detallada del producto.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Precio</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="precio"
                            id="admin-producto-precio"
                            placeholder="12.49"
                            value={precio}
                            required
                            onChange={(event) => setPrecio(event.target.value)}
                          ></Form.Control>
                          <InputGroup.Text>€</InputGroup.Text>
                        </InputGroup>
                        <Form.Text>
                          Valor de venta al público del producto en euros.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                          name="stock"
                          id="admin-producto-stock"
                          placeholder="50"
                          value={stock}
                          required
                          onChange={(event) => setStock(event.target.value)}
                        ></Form.Control>
                        <Form.Text>
                          Cantidad del producto disponible para su venta.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row>
              <Stack
                className="justify-content-end"
                gap={2}
                direction="horizontal"
              >
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
                <Link to="/admin/productos">
                  <Button variant="secondary">Volver</Button>
                </Link>
              </Stack>
            </Row>
          </Container>
        </Form>
      </Autenticado>
    </Page>
  );
};

export default AdminCrearProductoPage;
