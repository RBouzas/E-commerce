import useFetch from "./useFetch";

const useListaProductos = (offset, limit, search) => {
  const params = new URLSearchParams();
  if (search && search.length > 3) params.set("search", search);
  params.set("offset", offset);
  params.set("limit", limit);
  return useFetch({ url: `/api/productos?${params}` }, false);
};

export default useListaProductos;
