import { useState } from "react";
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

const ControlBusqueda = ({ busqueda, onCambioTextoBusqueda }) => (
  <input
    type="text"
    placeholder="¿Qué busca?"
    value={busqueda}
    autoFocus
    onChange={(event) => onCambioTextoBusqueda(event.target.value)}
  />
);

const ControlPaginacion = ({ pagina, onCambioPagina }) => (
  <div>
    <button disabled={pagina === 1} onClick={() => onCambioPagina(pagina - 1)}>
      {"<<"}
    </button>
    {pagina}
    <button onClick={() => onCambioPagina(pagina + 1)}>{">>"}</button>
  </div>
);

const ListaProductosPage = () => {
  const [pagina, setPagina] = useState(1);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const { data: listaProductos, loading: loadingListaProductos } =
    useListaProductos(
      ELEMENTOS_POR_PAGINA * (pagina - 1),
      ELEMENTOS_POR_PAGINA,
      textoBusqueda
    );

  return (
    <Page loading={loadingListaProductos}>
      <h1>Lista productos</h1>
      <ControlBusqueda
        busqueda={textoBusqueda}
        onCambioTextoBusqueda={(texto) => {
          setTextoBusqueda(texto);
          setPagina(1);
        }}
      />
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
      <ControlPaginacion pagina={pagina} onCambioPagina={setPagina} />
    </Page>
  );
};

export default ListaProductosPage;
