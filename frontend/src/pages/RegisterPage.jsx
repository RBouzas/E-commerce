import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useNavigate } from "react-router-dom";
import useRegistrarUsuario from "../client/useRegistrarUsuario";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";

const RegistroErrorToast = ({ show, onHide }) => {
  return (
    <Toast
      onClose={() => onHide()}
      show={show}
      delay={3000}
      autohide
      bg="danger"
    >
      <Toast.Header>
        <strong className="me-auto">¡Error!</strong>
      </Toast.Header>
      <Toast.Body>
        Ya existe una cuenta para ese usuario o correo electrónico.
      </Toast.Body>
    </Toast>
  );
};

const RegisterPage = () => {
  const { request, error, done } = useRegistrarUsuario();
  const [nombre, setNombre] = useState("");
  const [contrasenha, setContrasenha] = useState("");
  const [mail, setMail] = useState("");
  const [mostrarError, setMostrarError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!done) return;

    console.log(error);
    if (error) setMostrarError(true);
    else navigate("/login?registrado=true");
  }, [done, error, navigate, setMostrarError]);

  return (
    <Page>
      <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
        <ToastContainer className="p-3" position="top-end">
          <RegistroErrorToast
            show={mostrarError}
            onHide={() => setMostrarError(false)}
          />
        </ToastContainer>
        <TituloPagina>Crea tu cuenta</TituloPagina>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            request({ body: JSON.stringify({ nombre, contrasenha, mail }) });
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
            <Button type="submit" name="register">
              Registrarse
            </Button>
          </Stack>
        </form>
      </Stack>
    </Page>
  );
};

export default RegisterPage;
