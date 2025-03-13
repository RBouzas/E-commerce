import Form from "react-bootstrap/Form";

const ControlBusqueda = ({ busqueda, onCambioTextoBusqueda }) => (
  <Form.Group>
    <Form.Control
      id="producto-busqueda"
      type="text"
      placeholder="¿Qué busca?"
      value={busqueda}
      autoFocus
      onChange={(event) => onCambioTextoBusqueda(event.target.value)}
    />
    <Form.Text muted>
      Introduzca el texto que desea buscar. Se buscará tanto en el nombre como
      en la descripción de los artículos.
    </Form.Text>
  </Form.Group>
);

export default ControlBusqueda;
