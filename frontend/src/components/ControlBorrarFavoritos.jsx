import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "react-bootstrap/Button";
import useBorrarFavorito from "../client/useBorrarFavorito";
import Autenticado from "./Autenticado";

const ControlBorrarDeseados = ({ idProducto }) => {
  const { done, error, loading, request } = useBorrarFavorito();

  if (!done)
    return (
      <Autenticado>
        <Button
          className="px-2"
          disabled={loading}
          onClick={() => request({ body: JSON.stringify({ idProducto }) })}
          title="Borrar de mi lista de favoritos"
          variant="secondary"
        >
          <DeleteOutlineIcon />
        </Button>
      </Autenticado>
    );

  if (error) return <span>Error eliminando de la lista de favoritos</span>;

  return <span>Eliminado de favoritos</span>;
};

export default ControlBorrarDeseados;
