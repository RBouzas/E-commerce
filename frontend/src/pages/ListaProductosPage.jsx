import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/esm/Container";
import useListaProductos from "../client/useListaProductos";
import ControlGuardarCarrito from "../components/ControlGuardarCarrito";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";
import ControlPaginacion from "../components/ControlPaginacion";
import ControlBusqueda from "../components/ControlBusqueda";

const ListaItem = ({ idProducto, nombre, imagen, precio }) => {
  return (
    <Card className="h-100 d-flex">
      <Card.Img
        variant="top"
        style={{ height: "10vw" }}
        className="flex-grow-1 object-fit-contain"
        src={imagen}
        alt="Imagen del producto"
      />
      <Card.Body>
        <Card.Title title={nombre} className="text-truncate">
          {nombre}
        </Card.Title>
        <Card.Text>
          <strong>Precio:</strong> {precio}&#8364;
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={2}>
          <Card.Link className="flex-grow-1" href={`/productos/${idProducto}`}>
            Detalles...
          </Card.Link>
          <ControlGuardarCarrito idProducto={idProducto} />
        </Stack>
      </Card.Footer>
    </Card>
  );
};

const ListaItemPlaceholder = () => (
  <Card className="h-100 d-flex">
    <Card.Img
      variant="top"
      style={{ height: "10vw" }}
      className="flex-grow-1 object-fit-contain invisible"
    />
    <Card.Body>
      <Placeholder className="text-truncate" as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={2} /> <Placeholder xs={3} />
      </Placeholder>
    </Card.Body>
    <Card.Footer>
      <Placeholder as={Card.Link} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
    </Card.Footer>
  </Card>
);

const ELEMENTOS_POR_PAGINA = 6;

const ListaProductos = () => {
  const [pagina, setPagina] = useState(1);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const { data, loading: loadingListaProductos } = useListaProductos(
    ELEMENTOS_POR_PAGINA * (pagina - 1),
    ELEMENTOS_POR_PAGINA,
    textoBusqueda
  );

  return (
    <>
      <ControlBusqueda
        busqueda={textoBusqueda}
        onCambioTextoBusqueda={(texto) => {
          setTextoBusqueda(texto);
          setPagina(1);
        }}
      />
      <Container>
        <Row className="row-gap-4">
          {loadingListaProductos
            ? Array.from({ length: 6 }).map((_, indice) => (
                <Col key={indice} md={6} lg={4} xl={2}>
                  <ListaItemPlaceholder />
                </Col>
              ))
            : data &&
              data.productos.map((producto) => (
                <Col key={producto.idProducto} md={6} lg={4} xl={2}>
                  <ListaItem
                    idProducto={producto.idProducto}
                    nombre={producto.nombre}
                    imagen={producto.imagen}
                    precio={producto.precio}
                  />
                </Col>
              ))}
        </Row>
      </Container>
      {data && (
        <ControlPaginacion
          pagina={pagina}
          totalPaginas={data.paginacion.totalPaginas}
          onCambioPagina={setPagina}
        />
      )}
    </>
  );
};

const ListaProductosPage = () => {
  return (
    <Page>
      <Stack gap={4}>
        <TituloPagina>Lista de productos</TituloPagina>
        <ListaProductos />
      </Stack>
    </Page>
  );
};

export default ListaProductosPage;
