import useFetch from "./useFetch";

const useCarrito = () => {
  return useFetch({ url: "/api/carrito" });
};

export default useCarrito;
