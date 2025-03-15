import ControlGuardarCarrito from "./ControlGuardarCarrito";
import ControlGuardarDeseados from "./ControlGuardarDeseados";
import ControlGuardarFavoritos from "./ControlGuardarFavoritos";

const ControlesProducto = ({ idProducto, stock }) => (
  <>
    {stock ? (
      <ControlGuardarCarrito idProducto={idProducto} />
    ) : (
      <ControlGuardarDeseados idProducto={idProducto} />
    )}
    <ControlGuardarFavoritos idProducto={idProducto} />
  </>
);

export default ControlesProducto;
