import { useSearchParams } from "react-router-dom";
import Page from "../components/Page";
import Stack from "react-bootstrap/Stack";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const loginError =
    searchParams.has("error") && searchParams.get("error") !== "false";
  const registrado =
    searchParams.has("registrado") &&
    searchParams.get("registrado") !== "false";

  return (
    <Page>
      <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
        <h3>Inicia sesión</h3>
        {registrado && (
          <div>
            Ha completado el registro. A continuación verifique su cuenta para
            poder iniciar sesión.
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
            <input type="submit" name="login" value="Iniciar sesión" />
            {loginError && (
              <div>
                El usuario o la contraseña son incorrectos, o no ha verificado
                su cuenta.
              </div>
            )}
          </Stack>
        </form>
      </Stack>
    </Page>
  );
};

export default LoginPage;
