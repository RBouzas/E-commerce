import { useSearchParams } from "react-router-dom";
import Page from "../components/Page";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const loginError =
    searchParams.has("error") && searchParams.get("error") !== "false";

  return (
    <Page>
      <form action="http://localhost:8080/api/performLogin" method="POST">
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
        {loginError && <div>El usuario o la contraseña son incorrectos.</div>}
      </form>
    </Page>
  );
};

export default LoginPage;
