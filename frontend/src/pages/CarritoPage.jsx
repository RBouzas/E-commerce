import { useMemo } from "react";
import Page from "../components/Page";
import useCarrito from "../client/useCarrito";
import useBorrarCarrito from "../client/useBorrarCarrito";

const ControlBorrarCarrito = ({ idCarrito }) => {
  const { done, error, loading, request } = useBorrarCarrito(idCarrito);

  if (!done)
    return (
      <button disabled={loading} onClick={() => request()}>
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
    <li>
      <div>
        <img src={imagen} alt="Imagen del producto" />
      </div>
      <div>{nombre}</div>
      <div>{precio}</div>
      <div>
        <ControlBorrarCarrito idCarrito={idCarrito} />
      </div>
    </li>
  );
};

const PrecioTotal = ({ carrito }) => {
  const total = useMemo(() => {
    return carrito
      .map((elemento) => elemento.producto.precio)
      .reduce((accum, elemento) => accum + elemento, 0);
  }, [carrito]);

  return <div>Total: {total}</div>;
};

const CarritoPage = () => {
  const { data: carrito, loading: loadingCarrito } = useCarrito();

  return (
    <Page loading={loadingCarrito}>
      <h3>Tu carrito</h3>
      <ul>
        {carrito &&
          carrito.map((elemento) => <ElementoCarrito elemento={elemento} />)}
      </ul>
      <PrecioTotal carrito={carrito} />
    </Page>
  );
};

export default CarritoPage;
