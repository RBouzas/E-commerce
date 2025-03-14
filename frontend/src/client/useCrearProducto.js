import useFetch from "./useFetch";

const OPTIONS = { method: "POST" };

const useCrearProducto = () => {
  return useFetch(
    {
      url: "/api/productos/guardar",
      options: OPTIONS,
    },
    false
  );
};

export default useCrearProducto;
