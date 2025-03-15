import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router-dom";
import useVerDetalle from "../client/useVerDetalle";
import ControlesProducto from "../components/ControlesProducto";
import Loading from "../components/Loading";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";

const DetalleProducto = ({
  idProducto,
  nombre,
  descripcion,
  imagen,
  precio,
  stock,
}) => {
  return (
    <div>
      <div>
        <div>{nombre}</div>
        <div>
          <img src={imagen} alt="Imagen del producto" height="300px" />
        </div>
        <div>{descripcion}</div>
        <div>
          <strong>Precio: </strong>
          {precio}&#8364;
        </div>
        <Stack gap={2} direction="horizontal">
          <ControlesProducto idProducto={idProducto} stock={stock} />
        </Stack>
      </div>
    </div>
  );
};

const DetalleProductoPage = () => {
  const { idProducto } = useParams();
  const { data: producto, loading: loadingDetalleProducto } =
    useVerDetalle(idProducto);

  return (
    <Page>
      <Loading loading={loadingDetalleProducto}>
        <TituloPagina>Producto</TituloPagina>
        <div>
          {producto && (
            <DetalleProducto
              key={producto.idProducto}
              idProducto={producto.idProducto}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
              precio={producto.precio}
              stock={producto.stock}
            />
          )}
        </div>
      </Loading>
    </Page>
  );
};

export default DetalleProductoPage;
