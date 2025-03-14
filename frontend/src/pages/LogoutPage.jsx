import Autenticado, { AutenticadoContext } from "../components/Autenticado";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";
import useCerrarSesion from "./../client/useCerrarSesion";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import AccesoRestringido from "../components/AccesoRestringido";

const LogoutPage = () => {
  const { request: requestLogout } = useCerrarSesion();
  const navigate = useNavigate();
  const { request: requestAutenticado } = useContext(AutenticadoContext);

  return (
    <Page>
      <Autenticado fallback={<AccesoRestringido />}>
        <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
          <TituloPagina>Terminar su sesión en este dispositivo</TituloPagina>
          <Button
            onClick={async () => {
              await requestLogout();
              requestAutenticado();
              navigate("/");
            }}
          >
            Cerrar sesión
          </Button>
        </Stack>
      </Autenticado>
    </Page>
  );
};

export default LogoutPage;
