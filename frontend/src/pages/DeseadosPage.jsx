import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import useListaDeseados from "../client/useListaDeseados";
import Autenticado from "../components/Autenticado";
import Loading from "../components/Loading";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";
import AccesoRestringido from "../components/AccesoRestringido";
import TarjetaProducto from "../components/TarjetaProducto";
import Stack from "react-bootstrap/Stack";
import ControlGuardarCarrito from "../components/ControlGuardarCarrito";
import Card from "react-bootstrap/Card";
import ControlBorrarDeseados from "../components/ControlBorrarDeseados";

const ControlesDeseados = ({ idProducto, stock }) => (
  <Stack direction="horizontal" gap={2}>
    <Card.Link className="flex-grow-1" href={`/productos/${idProducto}`}>
      Detalles...
    </Card.Link>
    {stock ? <ControlGuardarCarrito idProducto={idProducto} /> : null}
    <ControlBorrarDeseados idProducto={idProducto} />
  </Stack>
);

const ListaDeseados = () => {
  const { data, loading } = useListaDeseados();

  return (
    <Container className="d-grid flex-grow-1">
      <Row className="row-gap-2">
        <Loading loading={loading} />
        {data?.length === 0 && "¡Todavía no hay nada en tu lista de deseados!"}
        {data?.map((deseado) => (
          <Col key={deseado.idProducto}>
            <TarjetaProducto
              idProducto={deseado.idProducto}
              nombre={deseado.nombre}
              imagen={deseado.imagen}
              precio={deseado.precio}
              stock={deseado.stock}
              controles={
                <ControlesDeseados
                  idProducto={deseado.idProducto}
                  stock={deseado.stock}
                />
              }
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const DeseadosPage = () => {
  return (
    <Page>
      <Autenticado fallback={<AccesoRestringido />}>
        <Stack gap={4}>
          <TituloPagina>Mi lista de deseados</TituloPagina>
          <ListaDeseados />
        </Stack>
      </Autenticado>
    </Page>
  );
};

export default DeseadosPage;
