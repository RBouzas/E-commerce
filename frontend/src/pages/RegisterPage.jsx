import { useState } from "react";
import useRegistrarUsuario from "../client/useRegistrarUsuario";
import Page from "../components/Page";

const RegisterPage = () => {
  const { request } = useRegistrarUsuario();
  const [nombre, setNombre] = useState("");
  const [contrasenha, setContrasenha] = useState("");

  return (
    <Page>
      <h3>Crea tu cuenta</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          request({
            body: JSON.stringify({ nombre, contrasenha }),
          });
        }}
      >
        <input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          id="username"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          id="password"
          value={contrasenha}
          onChange={(event) => setContrasenha(event.target.value)}
        />
        <input type="submit" name="register" value="Registrarse" />
      </form>
    </Page>
  );
};

export default RegisterPage;
