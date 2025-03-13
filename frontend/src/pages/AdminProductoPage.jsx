import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";
import { useState } from "react";
import useListaProductos from "../client/useListaProductos";
import Placeholder from "react-bootstrap/Placeholder";
import ControlPaginacion from "../components/ControlPaginacion";
import ControlBusqueda from "../components/ControlBusqueda";

const Acciones = () => <div />;

const FilaProducto = ({ id, nombre, precio, stock }) => (
  <tr>
    <td>{id}</td>
    <td>{nombre}</td>
    <td>{precio} €</td>
    <td>{stock}</td>
    <td>
      <Acciones />
    </td>
  </tr>
);

const FilaProductoPlaceholder = () => (
  <tr>
    <td>
      <Placeholder animation="glow">
        <Placeholder xs={4} />
      </Placeholder>
    </td>
    <td>
      <Placeholder animation="glow">
        <Placeholder xs={8} />
      </Placeholder>
    </td>
    <td>
      <Placeholder animation="glow">
        <Placeholder xs={3} />
      </Placeholder>
    </td>
    <td>
      <Placeholder animation="glow">
        <Placeholder xs={2} />
      </Placeholder>
    </td>
    <td></td>
  </tr>
);

const ELEMENTOS_POR_PAGINA = 10;

const TablaProductos = () => {
  const [pagina, setPagina] = useState(1);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const { data, loading: loadingListaProductos } = useListaProductos(
    ELEMENTOS_POR_PAGINA * (pagina - 1),
    ELEMENTOS_POR_PAGINA,
    textoBusqueda
  );

  return (
    <Stack gap={4}>
      <ControlBusqueda
        busqueda={textoBusqueda}
        onCambioTextoBusqueda={(texto) => {
          setTextoBusqueda(texto);
          setPagina(1);
        }}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loadingListaProductos
            ? Array.from({ length: ELEMENTOS_POR_PAGINA }).map((_, index) => (
                <FilaProductoPlaceholder key={index} />
              ))
            : data?.productos.map(({ idProducto, nombre, precio, stock }) => (
                <FilaProducto
                  key={idProducto}
                  id={idProducto}
                  nombre={nombre}
                  precio={precio}
                  stock={stock}
                />
              ))}
        </tbody>
      </Table>
      {data && (
        <ControlPaginacion
          pagina={pagina}
          totalPaginas={data.paginacion.totalPaginas}
          onCambioPagina={setPagina}
        />
      )}
    </Stack>
  );
};

const AdminProductoPage = (props) => {
  return (
    <Page>
      <Stack gap={4}>
        <TituloPagina>Inventario</TituloPagina>
        <TablaProductos />
      </Stack>
    </Page>
  );
};

export default AdminProductoPage;
