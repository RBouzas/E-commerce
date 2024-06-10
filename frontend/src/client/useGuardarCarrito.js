import useFetch from "./useFetch";

const OPTIONS = { method: "POST" };

const useGuardarCarrito = () => {
  return useFetch(
    {
      url: "/api/carrito",
      options: OPTIONS,
    },
    false
  );
};

export default useGuardarCarrito;
