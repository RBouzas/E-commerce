import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";
import useRegistrarUsuario from "../client/useRegistrarUsuario";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";

const RegisterPage = () => {
  const { request } = useRegistrarUsuario();
  const [nombre, setNombre] = useState("");
  const [contrasenha, setContrasenha] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  return (
    <Page>
      <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
        <TituloPagina>Crea tu cuenta</TituloPagina>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            request({
              body: JSON.stringify({ nombre, contrasenha, mail }),
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
              type="email"
              placeholder="Correo electrónico"
              name="email"
              id="email"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
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
