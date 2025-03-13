import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Placeholder from "react-bootstrap/Placeholder";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import useListaProductos from "../client/useListaProductos";
import ControlBusqueda from "../components/ControlBusqueda";
import ControlPaginacion from "../components/ControlPaginacion";
import Page from "../components/Page";
import TituloPagina from "../components/TituloPagina";
import useEliminarProducto from "../client/useEliminarProducto";
import Autenticado from "../components/Autenticado";
import AccesoRestringido from "../components/AccesoRestringido";

const DeleteConfirmation = ({ show, onClose, nombre }) => (
  <Modal show={show} onHide={() => onClose(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Borrar artículo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        ¿Estás seguro de que deseas eliminar <strong>{nombre}</strong>?
      </p>
      <p className="text-danger">Esta acción no se puede deshacer.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={() => onClose(true)}>
        Eliminar
      </Button>
      <Button variant="secondary" onClick={() => onClose(false)}>
        Cancelar
      </Button>
    </Modal.Footer>
  </Modal>
);

const Acciones = ({ id, nombre, refrescarLista }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { request: requestEliminar } = useEliminarProducto(id);

  return (
    <Stack gap={1} className="justify-content-center" direction="horizontal">
      <Button size="sm" variant="secondary" title="Editar artículo">
        <EditIcon className="fs-6" />
      </Button>
      <Button
        size="sm"
        variant="danger"
        title="Eliminar artículo"
        onClick={() => setShowDeleteModal(true)}
      >
        <DeleteIcon className="fs-6" />
      </Button>
      <DeleteConfirmation
        nombre={nombre}
        show={showDeleteModal}
        onClose={async (confirmado) => {
          setShowDeleteModal(false);
          if (!confirmado) return;

          await requestEliminar();
          refrescarLista();
        }}
      />
    </Stack>
  );
};

const FilaProducto = ({ id, nombre, precio, stock, refrescarLista }) => (
  <tr>
    <td>{id}</td>
    <td>{nombre}</td>
    <td>{precio} €</td>
    <td>{stock}</td>
    <td>
      <Acciones id={id} nombre={nombre} refrescarLista={refrescarLista} />
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
        <Placeholder xs={4} /> <Placeholder xs={5} /> <Placeholder xs={2} />
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
    <td>
      <Stack gap={1} className="justify-content-center" direction="horizontal">
        <Button size="sm" variant="secondary">
          <EditIcon className="fs-6" />
        </Button>
        <Button size="sm" variant="danger">
          <DeleteIcon className="fs-6" />
        </Button>
      </Stack>
    </td>
  </tr>
);

const ELEMENTOS_POR_PAGINA = 10;

const TablaProductos = () => {
  const [pagina, setPagina] = useState(1);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const {
    data,
    loading: loadingListaProductos,
    request: refrescarLista,
  } = useListaProductos(
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
                  refrescarLista={refrescarLista}
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

const AdminProductoPage = () => {
  return (
    <Page>
      <Autenticado rol="ADMIN" fallback={<AccesoRestringido />}>
        <Stack gap={4}>
          <TituloPagina>Inventario</TituloPagina>
          <TablaProductos />
        </Stack>
      </Autenticado>
    </Page>
  );
};

export default AdminProductoPage;
