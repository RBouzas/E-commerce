import useListaProductos from "../client/useListaProductos";
import Page from "../components/Page";

const ListaItem = ({ nombre, descripcion, imagen }) => {
  return (
    <div>
      <div>
        <img src={imagen} alt="Imagen del producto" />
      </div>
      <div>
        <div>{nombre}</div>
        <div>{descripcion}</div>
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
        {listaProductos.map((producto) => (
          <ListaItem
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </Page>
  );
};

export default ListaProductosPage;
