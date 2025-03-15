import { useSearchParams } from "react-router-dom";
import Page from "../components/Page";
import Stack from "react-bootstrap/Stack";
import TituloPagina from "../components/TituloPagina";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const loginError =
    searchParams.has("error") && searchParams.get("error") !== "false";
  const registrado =
    searchParams.has("registrado") &&
    searchParams.get("registrado") !== "false";
  const confirmado =
    searchParams.has("confirmado") &&
    searchParams.get("confirmado") !== "false";

  return (
    <Page>
      <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
        <TituloPagina>Inicia sesión</TituloPagina>
        {registrado && (
          <div className="text-success">
            Ha completado el registro. Siga las instrucciones recibidas por
            correo electrónico para confirmar su cuenta y después inicie sesión.
          </div>
        )}
        {confirmado && (
          <div className="text-success">
            Su correo electrónico ha sido verificado. Ya puede iniciar sesión.
          </div>
        )}
        {loginError && (
          <div className="text-danger">
            El usuario o la contraseña son incorrectos, o no ha verificado su
            cuenta.
          </div>
        )}
        <form action="http://localhost:8080/api/performLogin" method="POST">
          <Stack gap={2}>
            <input
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              id="username"
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              id="password"
            />
            <Button type="submit" name="login">
              Iniciar sesión
            </Button>
          </Stack>
        </form>
      </Stack>
    </Page>
  );
};

export default LoginPage;
