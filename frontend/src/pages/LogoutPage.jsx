import Page from "../components/Page";
import useCerrarSesion from "./../client/useCerrarSesion";
import Stack from "react-bootstrap/Stack";

const LogoutPage = () => {
  const { request } = useCerrarSesion();

  return (
    <Page>
      <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
        <h3>Terminar su sesión en este dispositivo</h3>
        <button onClick={() => request()}>Cerrar sesión</button>
      </Stack>
    </Page>
  );
};

export default LogoutPage;
