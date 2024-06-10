import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useGuardarCarrito from "../client/useGuardarCarrito";
import Autenticado from "./Autenticado";

const ControlGuardarCarrito = ({ idProducto }) => {
  const { done, error, loading, request } = useGuardarCarrito();

  if (!done)
    return (
      <Autenticado>
        <button
          disabled={loading}
          onClick={() => request({ body: JSON.stringify({ idProducto }) })}
        >
          <AddShoppingCartIcon />
          Añadir al carrito
        </button>
      </Autenticado>
    );

  if (error) return <span>Error añadiendo al carrito</span>;

  return <span>Añadido al carrito</span>;
};

export default ControlGuardarCarrito;
