import useFetch from "./useFetch";

const OPTIONS = { method: "POST" };

const useGuardarDeseados = () => {
  return useFetch(
    {
      url: "/api/deseados/agregar",
      options: OPTIONS,
    },
    false
  );
};

export default useGuardarDeseados;
