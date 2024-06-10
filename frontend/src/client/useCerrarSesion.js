import useFetch from "./useFetch";

const OPTIONS = { method: "POST" };

const useCerrarSesion = () => {
  return useFetch(
    {
      url: `/api/autenticacion/logout`,
      options: OPTIONS,
    },
    false
  );
};

export default useCerrarSesion;
