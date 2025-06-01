import { useSearchParams } from "react-router-dom";
import Page from "../components/Page";
import Stack from "react-bootstrap/Stack";
import TituloPagina from "../components/TituloPagina";
import Button from "react-bootstrap/Button";
import { useCallback } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ExitoRegistroToast = ({ show, onHide }) => {
  return (
    <Toast
      onClose={() => onHide()}
      show={show}
      delay={3000}
      autohide
      bg="success"
    >
      <Toast.Header>
        <strong className="me-auto">Registro completado</strong>
      </Toast.Header>
      <Toast.Body>
        Siga las instrucciones recibidas por correo electrónico para confirmar
        su cuenta y después inicie sesión.
      </Toast.Body>
    </Toast>
  );
};

const VerificadoToast = ({ show, onHide }) => {
  return (
    <Toast
      onClose={() => onHide()}
      show={show}
      delay={3000}
      autohide
      bg="success"
    >
      <Toast.Header>
        <strong className="me-auto">Correo verificado</strong>
      </Toast.Header>
      <Toast.Body>¡Ya puede iniciar sesión!</Toast.Body>
    </Toast>
  );
};

const ErrorLoginToast = ({ show, onHide }) => {
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
        El usuario o la contraseña son incorrectos, o no ha verificado su
        cuenta.
      </Toast.Body>
    </Toast>
  );
};

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const loginError = searchParams.get("error") === "true";
  const registrado = searchParams.get("registrado") === "true";
  const confirmado = searchParams.get("confirmado") === "true";

  const removeSearch = useCallback(
    () => setSearchParams(new URLSearchParams()),
    [setSearchParams]
  );

  return (
    <Page>
      <Stack gap={2} style={{ maxWidth: "50%" }} className="m-auto">
        <ToastContainer className="p-3" position="top-end">
          <ExitoRegistroToast show={registrado} onHide={() => removeSearch()} />
          <VerificadoToast show={confirmado} onHide={() => removeSearch()} />
          <ErrorLoginToast show={loginError} onHide={() => removeSearch()} />
        </ToastContainer>
        <TituloPagina>Inicia sesión</TituloPagina>
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
