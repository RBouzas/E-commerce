import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOff from "@mui/icons-material/FilterAltOff";
import { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Placeholder from "react-bootstrap/Placeholder";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { useSearchParams } from "react-router-dom";
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

const Filtros = ({
  minimo,
  setMinimo,
  maximo,
  setMaximo,
  disponible,
  setDisponible,
}) => (
  <Stack gap={2} className="align-middle" direction="horizontal">
    <Form.Label className="m-0" htmlFor="filtro-precio">
      Precio
    </Form.Label>
    <InputGroup className="m-0" id="filtro-precio">
      <Form.Control
        type="number"
        min="0"
        placeholder="Mín"
        value={minimo ?? ""}
        onChange={(event) => setMinimo(event.target.value)}
      />
      <InputGroup.Text>-</InputGroup.Text>
      <Form.Control
        type="number"
        min="0"
        placeholder="Máx"
        value={maximo ?? ""}
        onChange={(event) => setMaximo(event.target.value)}
      />
      <InputGroup.Text>€</InputGroup.Text>
    </InputGroup>
    <Form.Check
      id="filtro-disponibles"
      type="switch"
      label="Solo&nbsp;en&nbsp;stock"
      checked={disponible}
      onChange={(event) => setDisponible(event.target.checked)}
    />
  </Stack>
);

const ELEMENTOS_POR_PAGINA = 6;

const ListaProductos = () => {
  const [search, setSearch] = useSearchParams();
  const pagina = Math.max(1, parseInt(search.get("page") ?? "1"));
  const textoBusqueda = search.get("search") ?? "";
  const minimo = search.get("minimum");
  const maximo = search.get("maximum");
  const disponible = search.get("available") === "true";

  const setPagina = (pagina) => {
    search.set("page", pagina);
    setSearch(search);
  };

  const setTextoBusqueda = (textoBusqueda) => {
    if (textoBusqueda === "") search.delete("search");
    else search.set("search", textoBusqueda);
    setSearch(search);
  };

  const setMinimo = (minimo) => {
    if (!minimo || minimo === "") search.delete("minimum");
    else search.set("minimum", minimo);
    setSearch(search);
  };

  const setMaximo = (maximo) => {
    if (!maximo || maximo === "") search.delete("maximum");
    else search.set("maximum", maximo);
    setSearch(search);
  };

  const setDisponible = (disponible) => {
    if (!disponible || disponible === "") search.delete("available");
    else search.set("available", disponible);
    setSearch(search);
  };

  const { data, loading: loadingListaProductos } = useListaProductos(
    ELEMENTOS_POR_PAGINA * (pagina - 1),
    ELEMENTOS_POR_PAGINA,
    textoBusqueda,
    minimo,
    maximo,
    disponible
  );

  const [mostrarFiltros, setMostrarFiltros] = useState(true);

  const limpiarFiltros = useCallback(() => {
    setMinimo(null);
    setMaximo(null);
    setDisponible(null);
  });

  return (
    <>
      <Stack
        gap={4}
        direction="horizontal"
        className="align-items-center justify-content-end"
      >
        {mostrarFiltros && (
          <Filtros
            minimo={minimo}
            setMinimo={setMinimo}
            maximo={maximo}
            setMaximo={setMaximo}
            disponible={disponible}
            setDisponible={setDisponible}
          />
        )}
        <Button
          variant={mostrarFiltros ? "danger" : "primary"}
          onClick={() =>
            setMostrarFiltros((anterior) => {
              if (anterior) limpiarFiltros();
              return !anterior;
            })
          }
        >
          {mostrarFiltros ? <FilterAltOff /> : <FilterAltIcon />}
          Filtros
        </Button>
      </Stack>
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
      {data && data?.productos?.length > 0 && (
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
