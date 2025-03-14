import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import Autenticado from "./Autenticado";
import Button from "react-bootstrap/Button";
import useBorrarDeseado from "../client/useBorrarDeseado";

const ControlBorrarDeseados = ({ idProducto }) => {
  const { done, error, loading, request } = useBorrarDeseado();

  if (!done)
    return (
      <Autenticado>
        <Button
          className="px-2"
          disabled={loading}
          onClick={() => request({ body: JSON.stringify({ idProducto }) })}
          title="Borrar de mi lista de deseados"
          variant="danger"
        >
          <BookmarkRemoveIcon />
        </Button>
      </Autenticado>
    );

  if (error) return <span>Error eliminando a la lista de deseados</span>;

  return <span>Eliminado de deseados</span>;
};

export default ControlBorrarDeseados;
