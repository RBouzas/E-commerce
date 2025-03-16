import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useMemo } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import useBorrarCarrito from "../client/useBorrarCarrito";
import useCarrito from "../client/useCarrito";
import Loading from "../components/Loading";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";
import Button from "react-bootstrap/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const ControlBorrarCarrito = ({ idCarrito, refrescar }) => {
  const { done, error, loading, request } = useBorrarCarrito(idCarrito);

  if (!done)
    return (
      <Button disabled={loading} onClick={() => request().finally(refrescar)}>
        <RemoveShoppingCartIcon />
        Eliminar
      </Button>
    );

  if (error) return <span>Error eliminando producto del carrito</span>;

  return <span>Eliminado del carrito</span>;
};

const ElementoCarrito = ({ elemento, refrescar }) => {
  const { idCarrito, producto } = elemento;
  const { nombre, precio, imagen } = producto;
  return (
    <Row>
      <Col>
        <img src={imagen} alt="Imagen del producto" />
      </Col>
      <Col>{nombre}</Col>
      <Col>{precio} &#8364;</Col>
      <Col>
        <ControlBorrarCarrito idCarrito={idCarrito} refrescar={refrescar} />
      </Col>
    </Row>
  );
};

const PrecioTotal = ({ carrito }) => {
  const total = useMemo(() => {
    return carrito
      .map((elemento) => elemento.producto.precio)
      .reduce((accum, elemento) => accum + elemento, 0);
  }, [carrito]);

  return <div>Total: {total?.toFixed(2)}&#8364;</div>;
};

const CarritoPage = () => {
  const { data: carrito, loading: loadingCarrito, request } = useCarrito();

  return (
    <Page>
      <Loading loading={loadingCarrito}>
        <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
          <TituloPagina>Tu carrito</TituloPagina>
          <Container>
            {carrito &&
              carrito.map((elemento) => (
                <ElementoCarrito elemento={elemento} refrescar={request} />
              ))}
          </Container>
          <PrecioTotal carrito={carrito} />
          <form action="/api/carrito/checkout" method="POST">
            <Button type="submit">
              <ShoppingCartCheckoutIcon />
              Pagar
            </Button>
          </form>
        </Stack>
      </Loading>
    </Page>
  );
};

export default CarritoPage;
