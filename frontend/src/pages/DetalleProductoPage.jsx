import { useParams } from "react-router-dom";
import useVerDetalle from "../client/useVerDetalle";
import Page from "../components/Page";
import ControlGuardarCarrito from "../components/ControlGuardarCarrito";

const DetalleProducto = ({ idProducto, nombre, descripcion, imagen }) => {
  return (
    <div>
      <div>
        <div>{nombre}</div>
        <div>
          <img src={imagen} alt="Imagen del producto" height="300px" />
        </div>
        <div>{descripcion}</div>
        <div>
          <ControlGuardarCarrito idProducto={idProducto} />
        </div>
      </div>
    </div>
  );
};

const DetalleProductoPage = () => {
  const { idProducto } = useParams();
  const { data: producto, loading: loadingDetalleProducto } =
    useVerDetalle(idProducto);

  return (
    <Page loading={loadingDetalleProducto}>
      <h1>Producto</h1>
      <div>
        {producto && (
          <DetalleProducto
            key={producto.idProducto}
            idProducto={producto.idProducto}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            imagen={producto.imagen}
          />
        )}
      </div>
    </Page>
  );
};

export default DetalleProductoPage;
