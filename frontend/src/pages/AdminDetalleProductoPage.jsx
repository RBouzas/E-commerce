import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Toast from "react-bootstrap/Toast";
import { Link, useParams } from "react-router-dom";
import useEditarProducto from "../client/useEditarProducto";
import useVerDetalle from "../client/useVerDetalle";
import AccesoRestringido from "../components/AccesoRestringido";
import Autenticado from "../components/Autenticado";
import Loading from "../components/Loading";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";
import ToastContainer from "react-bootstrap/ToastContainer";

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
        <strong className="me-auto">Edición completada</strong>
      </Toast.Header>
      <Toast.Body>
        Los cambios en <strong>{nombre}</strong> se han guardado correctamente.
      </Toast.Body>
    </Toast>
  );
};

const AdminDetalleProductoPage = () => {
  const { idProducto } = useParams();
  const { data: producto, loading: loadingDetalleProducto } =
    useVerDetalle(idProducto);

  const [showSuccess, setShowSuccess] = useState(false);

  const { request: requestModificar } = useEditarProducto(idProducto);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    setNombre(producto?.nombre ?? "");
    setDescripcion(producto?.descripcion ?? "");
    setPrecio(producto?.precio ?? "");
    setStock(producto?.stock ?? "");
  }, [
    producto?.nombre,
    producto?.descripcion,
    producto?.precio,
    producto?.stock,
    setNombre,
    setDescripcion,
    setPrecio,
    setStock,
  ]);

  return (
    <Page>
      <TituloPagina>Editar producto</TituloPagina>
      <Autenticado rol="ADMIN" fallback={<AccesoRestringido />}>
        <Loading loading={loadingDetalleProducto}>
          <Form
            onSubmit={(event) => {
              const formData = new FormData(event.target);
              const data = Object.fromEntries(formData);

              requestModificar({ body: JSON.stringify(data) }).then(() =>
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
                  <Image src={producto?.imagen} />
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
                              placeholder="0.0"
                              value={precio}
                              required
                              onChange={(event) =>
                                setPrecio(event.target.value)
                              }
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
                            placeholder="0"
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
        </Loading>
      </Autenticado>
    </Page>
  );
};

export default AdminDetalleProductoPage;
