import useFetch from "./useFetch";

const OPTIONS = { method: "POST" };

const useRegistrarUsuario = () => {
  return useFetch(
    {
      url: "/api/autenticacion/register",
      options: OPTIONS,
    },
    false
  );
};

export default useRegistrarUsuario;
