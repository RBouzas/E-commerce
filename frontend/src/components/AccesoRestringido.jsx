import LockIcon from "@mui/icons-material/Lock";
import Stack from "react-bootstrap/esm/Stack";
import { Link } from "react-router-dom";
import TituloPagina from "./TituloPagina";

const AccesoRestringido = () => (
  <Stack gap={4}>
    <LockIcon className="fs-1" />
    <TituloPagina>Acceso restringido</TituloPagina>
    <p>
      Está intentando acceder a un área privada. Por favor,{" "}
      <Link to="/login">inicie sesión</Link> para continuar.
    </p>
  </Stack>
);

export default AccesoRestringido;
