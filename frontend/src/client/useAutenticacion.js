import useFetch from "./useFetch";

const useAutenticacion = () => {
  return useFetch({ url: "/api/autenticacion/me" });
};

export default useAutenticacion;
