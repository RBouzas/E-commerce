import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import useListaFavoritos from "../client/useListaFavoritos";
import AccesoRestringido from "../components/AccesoRestringido";
import Autenticado from "../components/Autenticado";
import ControlBorrarFavoritos from "../components/ControlBorrarFavoritos";
import ControlGuardarCarrito from "../components/ControlGuardarCarrito";
import Loading from "../components/Loading";
import Page from "../components/Page";
import TarjetaProducto from "../components/TarjetaProducto";
import TituloPagina from "../components/TituloPagina";

const ControlesFavoritos = ({ idProducto, stock }) => (
  <>
    {stock ? <ControlGuardarCarrito idProducto={idProducto} /> : null}
    <ControlBorrarFavoritos idProducto={idProducto} />
  </>
);

const ListaFavoritos = () => {
  const { data, loading } = useListaFavoritos();

  return (
    <Container className="d-grid flex-grow-1">
      <Row className="row-gap-2">
        <Loading loading={loading} />
        {data?.length === 0 &&
          "¡Todavía no has marcado ningún producto favorito!"}
        {data?.map((favorito) => (
          <Col key={favorito.idProducto}>
            <TarjetaProducto
              idProducto={favorito.idProducto}
              nombre={favorito.nombre}
              imagen={favorito.imagen}
              precio={favorito.precio}
              stock={favorito.stock}
              controles={
                <ControlesFavoritos
                  idProducto={favorito.idProducto}
                  stock={favorito.stock}
                />
              }
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const FavoritosPage = () => {
  return (
    <Page>
      <Autenticado fallback={<AccesoRestringido />}>
        <Stack gap={4}>
          <TituloPagina>Mis favoritos</TituloPagina>
          <ListaFavoritos />
        </Stack>
      </Autenticado>
    </Page>
  );
};

export default FavoritosPage;
