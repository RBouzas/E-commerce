import useGuardarCarrito from "../client/useGuardarCarrito";

const ControlGuardarCarrito = ({ idProducto }) => {
  const { done, error, loading, request } = useGuardarCarrito();

  if (!done)
    return (
      <button
        disabled={loading}
        onClick={() => request({ body: JSON.stringify({ idProducto }) })}
      >
        Añadir al carrito
      </button>
    );

  if (error) return <span>Error añadiendo al carrito</span>;

  return <span>Añadido al carrito</span>;
};

export default ControlGuardarCarrito;
