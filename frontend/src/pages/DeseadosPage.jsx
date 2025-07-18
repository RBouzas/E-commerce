import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import useListaDeseados from "../client/useListaDeseados";
import AccesoRestringido from "../components/AccesoRestringido";
import Autenticado from "../components/Autenticado";
import ControlBorrarDeseados from "../components/ControlBorrarDeseados";
import ControlGuardarCarrito from "../components/ControlGuardarCarrito";
import Loading from "../components/Loading";
import Page from "../components/Page";
import TarjetaProducto from "../components/TarjetaProducto";
import TituloPagina from "../components/TituloPagina";

const ControlesDeseados = ({ idProducto, stock }) => (
  <>
    {stock ? <ControlGuardarCarrito idProducto={idProducto} /> : null}
    <ControlBorrarDeseados idProducto={idProducto} />
  </>
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
