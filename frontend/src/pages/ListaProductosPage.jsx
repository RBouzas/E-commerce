import { useEffect, useState } from "react";
import useListaProductos from "../client/useListaProductos";
import ControlGuardarCarrito from "../components/ControlGuardarCarrito";
import Page from "../components/Page";

const ControlVerDetalle = ({ idProducto }) => {
  return <a href={`/productos/${idProducto}`}>Detalles</a>;
};

const ListaItem = ({ idProducto, nombre, imagen }) => {
  return (
    <div>
      <div>
        <img src={imagen} alt="Imagen del producto" height="100px" />
      </div>
      <div>
        <div>{nombre}</div>
        <div>
          <ControlVerDetalle idProducto={idProducto} />
        </div>
        <div>
          <ControlGuardarCarrito idProducto={idProducto} />
        </div>
      </div>
    </div>
  );
};

const ELEMENTOS_POR_PAGINA = 5;

const Paginacion = ({ pagina, onCambioPagina }) => {
  return (
    <div>
      <button
        disabled={pagina === 1}
        onClick={() => onCambioPagina(pagina - 1)}
      >
        {"<<"}
      </button>
      {pagina}
      <button onClick={() => onCambioPagina(pagina + 1)}>{">>"}</button>
    </div>
  );
};

const ListaProductosPage = () => {
  const [pagina, setPagina] = useState(1);
  const {
    data: listaProductos,
    loading: loadingListaProductos,
    request,
  } = useListaProductos(
    ELEMENTOS_POR_PAGINA * (pagina - 1),
    ELEMENTOS_POR_PAGINA
  );

  useEffect(() => {
    request && request();
    return () => {};
  }, [request, pagina]);

  return (
    <Page loading={loadingListaProductos}>
      <h1>Lista productos</h1>
      <div>
        {listaProductos &&
          listaProductos.map((producto) => (
            <ListaItem
              key={producto.idProducto}
              idProducto={producto.idProducto}
              nombre={producto.nombre}
              imagen={producto.imagen}
            />
          ))}
      </div>
      <Paginacion
        pagina={pagina}
        onCambioPagina={(numero) => setPagina(numero)}
      />
    </Page>
  );
};

export default ListaProductosPage;
