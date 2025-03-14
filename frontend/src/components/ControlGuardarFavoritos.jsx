import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "react-bootstrap/Button";
import useGuardarFavoritos from "../client/useGuardarFavoritos";
import Autenticado from "./Autenticado";

const ControlGuardarFavoritos = ({ idProducto }) => {
  const { done, error, loading, request } = useGuardarFavoritos();

  if (!done)
    return (
      <Autenticado>
        <Button
          className="px-2"
          disabled={loading}
          onClick={() => request({ body: JSON.stringify({ idProducto }) })}
          title="Añadir a mis favoritos"
          variant="danger"
        >
          <FavoriteBorderIcon />
        </Button>
      </Autenticado>
    );

  if (error) return <span>Error añadiendo a los favoritos</span>;

  return <span>Añadido a favoritos</span>;
};

export default ControlGuardarFavoritos;
