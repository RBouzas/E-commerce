import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import Autenticado from "./Autenticado";
import Button from "react-bootstrap/Button";
import useGuardarDeseados from "../client/useGuardarDeseados";

const ControlGuardarDeseados = ({ idProducto }) => {
  const { done, error, loading, request } = useGuardarDeseados();

  if (!done)
    return (
      <Autenticado>
        <Button
          className="px-2"
          disabled={loading}
          onClick={() => request({ body: JSON.stringify({ idProducto }) })}
          title="Añadir a mi lista de deseados"
          variant="warning"
        >
          <BookmarkAddIcon />
        </Button>
      </Autenticado>
    );

  if (error) return <span>Error añadiendo a la lista de deseados</span>;

  return <span>Añadido a deseados</span>;
};

export default ControlGuardarDeseados;
