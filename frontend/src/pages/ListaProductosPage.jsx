import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/esm/Container";
import useListaProductos from "../client/useListaProductos";
import ControlGuardarCarrito from "../components/ControlGuardarCarrito";
import Page from "../components/Page";

const ListaItem = ({ idProducto, nombre, imagen, precio }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imagen} alt="Imagen del producto" />
      <div className="flex-grow-1" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong> {precio}&#8364;
        </Card.Text>
        <Card.Link href={`/productos/${idProducto}`}>Detalles...</Card.Link>
        <div>
          <ControlGuardarCarrito idProducto={idProducto} />
        </div>
      </Card.Body>
    </Card>
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

const ControlPaginacion = ({ pagina, totalPaginas, onCambioPagina }) => {
  const minima = Math.max(1, pagina - 1);
  const maxima = Math.min(totalPaginas, minima + 2);
  const paginas = [];

  for (let numero = minima; numero <= maxima; numero++) {
    if (numero > 0 && numero <= totalPaginas) {
      paginas.push(numero);
    }
  }

  return (
    <div className="mx-auto">
      <Pagination>
        <Pagination.First
          disabled={pagina === 1}
          onClick={() => onCambioPagina(1)}
        />
        <Pagination.Prev
          disabled={pagina === 1}
          onClick={() => onCambioPagina(pagina - 1)}
        />
        {paginas.map((numero) => (
          <Pagination.Item
            key={numero}
            active={numero === pagina}
            onClick={() => onCambioPagina(numero)}
          >
            {numero}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={pagina === totalPaginas}
          onClick={() => onCambioPagina(pagina + 1)}
        />
        <Pagination.Last
          disabled={pagina === totalPaginas}
          onClick={() => onCambioPagina(totalPaginas)}
        />
      </Pagination>
    </div>
  );
};

const ListaProductosPage = () => {
  const [pagina, setPagina] = useState(1);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const { data, loading: loadingListaProductos } = useListaProductos(
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
            {data &&
              data.productos.map((producto) => (
                <Col key={producto.idProducto} md={6} xl={2}>
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
      </Stack>
    </Page>
  );
};

export default ListaProductosPage;
