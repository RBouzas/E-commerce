import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";
import useRegistrarUsuario from "../client/useRegistrarUsuario";
import Page from "../components/Page";

const RegisterPage = () => {
  const { request } = useRegistrarUsuario();
  const [nombre, setNombre] = useState("");
  const [contrasenha, setContrasenha] = useState("");
  const navigate = useNavigate();

  return (
    <Page>
      <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
        <h3>Crea tu cuenta</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            request({
              body: JSON.stringify({ nombre, contrasenha }),
            });

            navigate("/login?registrado=true");
          }}
        >
          <Stack gap={2}>
            <input
              type="text"
              placeholder="Nombre de usuario"
              name="username"
              id="username"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              id="password"
              value={contrasenha}
              onChange={(event) => setContrasenha(event.target.value)}
              required
            />
            <input type="submit" name="register" value="Registrarse" />
          </Stack>
        </form>
      </Stack>
    </Page>
  );
};

export default RegisterPage;
