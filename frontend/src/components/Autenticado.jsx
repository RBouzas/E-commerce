import { createContext, useContext } from "react";
import useAutenticacion from "../client/useAutenticacion";

const AutenticadoContext = createContext(null);

const Autenticado = ({ children, fallback }) => {
  const autenticado = useContext(AutenticadoContext);

  if (autenticado === null || autenticado.loading) {
    return null;
  }

  if (!autenticado.data || autenticado.data.length === 0) {
    return fallback;
  }

  return children;
};

const Provider = ({ children }) => {
  const autenticado = useAutenticacion();

  return (
    <AutenticadoContext.Provider value={autenticado}>
      {children}
    </AutenticadoContext.Provider>
  );
};

Autenticado.Provider = Provider;

export default Autenticado;
