import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/esm/Container";
import useListaProductos from "../client/useListaProductos";
import ControlBusqueda from "../components/ControlBusqueda";
import ControlPaginacion from "../components/ControlPaginacion";
import ControlesProducto from "../components/ControlesProducto";
import Page from "../components/Page";
import TarjetaProducto from "../components/TarjetaProducto";
import TituloPagina from "../components/TituloPagina";

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
                  <TarjetaProducto
                    idProducto={producto.idProducto}
                    nombre={producto.nombre}
                    imagen={producto.imagen}
                    precio={producto.precio}
                    stock={producto.stock}
                    controles={
                      <ControlesProducto
                        idProducto={producto.idProducto}
                        stock={producto.stock}
                      />
                    }
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
      <Stack className="flex-grow-0" gap={4}>
        <TituloPagina>Lista de productos</TituloPagina>
        <ListaProductos />
      </Stack>
    </Page>
  );
};

export default ListaProductosPage;
