import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useGuardarCarrito from "../client/useGuardarCarrito";
import Autenticado from "./Autenticado";
import Button from "react-bootstrap/Button";

const ControlGuardarCarrito = ({ idProducto }) => {
  const { done, error, loading, request } = useGuardarCarrito();

  if (!done)
    return (
      <Autenticado>
        <Button
          className="px-2"
          disabled={loading}
          onClick={() => request({ body: JSON.stringify({ idProducto }) })}
          title="Añadir al carrito"
          variant="secondary"
        >
          <AddShoppingCartIcon />
        </Button>
      </Autenticado>
    );

  if (error) return <span>Error añadiendo al carrito</span>;

  return <span>Añadido al carrito</span>;
};

export default ControlGuardarCarrito;
