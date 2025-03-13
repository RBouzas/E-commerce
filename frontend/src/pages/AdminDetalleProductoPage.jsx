import AccesoRestringido from "../components/AccesoRestringido";
import Autenticado from "../components/Autenticado";

const AdminDetalleProductoPage = () => {
  return (
    <Autenticado rol="ADMIN" fallback={<AccesoRestringido />}>
      Admin detalle producto page
    </Autenticado>
  );
};

export default AdminDetalleProductoPage;
