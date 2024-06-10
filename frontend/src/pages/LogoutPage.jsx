import Page from "../components/Page";
import useCerrarSesion from "./../client/useCerrarSesion";

const LogoutPage = () => {
  const { request } = useCerrarSesion();

  return (
    <Page>
      <h3>Terminar su sesión en este dispositivo</h3>
      <button onClick={() => request()}>Cerrar sesión</button>
    </Page>
  );
};

export default LogoutPage;
