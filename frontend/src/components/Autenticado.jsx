import useAutenticacion from "../client/useAutenticacion";

const Autenticado = ({ children, fallback }) => {
  const { data, loading } = useAutenticacion();

  if (loading) {
    return null;
  }

  if (!data || data.length === 0) {
    return fallback;
  }

  return children;
};

export default Autenticado;
