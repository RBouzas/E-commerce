import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/esm/Container";
import useListaProductos from "../client/useListaProductos";
import ControlGuardarCarrito from "../components/ControlGuardarCarrito";
import Page from "../components/Page";

const ListaItem = ({ idProducto, nombre, imagen }) => {
  return (
    <a className="text-decoration-none" href={`/productos/${idProducto}`}>
      <Card className="h-100">
        <Card.Img variant="top" src={imagen} alt="Imagen del producto" />
        <div className="flex-grow-1" />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <ControlGuardarCarrito idProducto={idProducto} />
        </Card.Body>
      </Card>
    </a>
  );
};

const ELEMENTOS_POR_PAGINA = 6;

const ControlBusqueda = ({ busqueda, onCambioTextoBusqueda }) => (
  <input
    type="text"
    placeholder="¿Qué busca?"
    value={busqueda}
    autoFocus
    onChange={(event) => onCambioTextoBusqueda(event.target.value)}
  />
);

const ControlPaginacion = ({ pagina, onCambioPagina }) => (
  <div className="mx-auto">
    <Container>
      <Row>
        <Col>
          <button
            disabled={pagina === 1}
            onClick={() => onCambioPagina(pagina - 1)}
          >
            <NavigateBeforeIcon />
          </button>
        </Col>
        <Col>{pagina}</Col>
        <Col>
          <button onClick={() => onCambioPagina(pagina + 1)}>
            <NavigateNextIcon />
          </button>
        </Col>
      </Row>
    </Container>
  </div>
);

const ListaProductosPage = () => {
  const [pagina, setPagina] = useState(1);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const { data: listaProductos, loading: loadingListaProductos } =
    useListaProductos(
      ELEMENTOS_POR_PAGINA * (pagina - 1),
      ELEMENTOS_POR_PAGINA,
      textoBusqueda
    );

  return (
    <Page loading={loadingListaProductos}>
      <Stack gap={4}>
        <h1>Lista de productos</h1>
        <ControlBusqueda
          busqueda={textoBusqueda}
          onCambioTextoBusqueda={(texto) => {
            setTextoBusqueda(texto);
            setPagina(1);
          }}
        />
        <Container>
          <Row>
            {listaProductos &&
              listaProductos.map((producto) => (
                <Col md={6} xl={2}>
                  <ListaItem
                    key={producto.idProducto}
                    idProducto={producto.idProducto}
                    nombre={producto.nombre}
                    imagen={producto.imagen}
                  />
                </Col>
              ))}
          </Row>
        </Container>
        <ControlPaginacion pagina={pagina} onCambioPagina={setPagina} />
      </Stack>
    </Page>
  );
};

export default ListaProductosPage;
