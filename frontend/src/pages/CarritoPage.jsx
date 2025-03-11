import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useMemo } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import useBorrarCarrito from "../client/useBorrarCarrito";
import useCarrito from "../client/useCarrito";
import Page from "../components/Page";

const ControlBorrarCarrito = ({ idCarrito }) => {
  const { done, error, loading, request } = useBorrarCarrito(idCarrito);

  if (!done)
    return (
      <button disabled={loading} onClick={() => request()}>
        <RemoveShoppingCartIcon />
        Eliminar
      </button>
    );

  console.log(error);
  if (error) return <span>Error eliminando producto del carrito</span>;

  return <span>Eliminado del carrito</span>;
};

const ElementoCarrito = ({ elemento }) => {
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
        <ControlBorrarCarrito idCarrito={idCarrito} />
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

  return <div>Total: {total}&#8364;</div>;
};

const CarritoPage = () => {
  const { data: carrito, loading: loadingCarrito } = useCarrito();

  return (
    <Page loading={loadingCarrito}>
      <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
        <h3>Tu carrito</h3>
        <Container>
          {carrito &&
            carrito.map((elemento) => <ElementoCarrito elemento={elemento} />)}
        </Container>
        <PrecioTotal carrito={carrito} />
      </Stack>
    </Page>
  );
};

export default CarritoPage;
