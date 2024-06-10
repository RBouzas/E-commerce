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

const ListaProductosPage = () => {
  const { data: listaProductos, loading: loadingListaProductos } =
    useListaProductos();

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
    </Page>
  );
};

export default ListaProductosPage;
