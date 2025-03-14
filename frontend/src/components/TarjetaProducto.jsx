import Card from "react-bootstrap/Card";
import StockStatus from "../components/StockStatus";
import Stack from "react-bootstrap/Stack";

const TarjetaProducto = ({
  idProducto,
  nombre,
  imagen,
  precio,
  stock,
  controles,
}) => {
  return (
    <Card className="h-100 d-flex">
      <Card.Img
        variant="top"
        style={{ height: "10vw" }}
        className="flex-grow-1 object-fit-contain"
        src={imagen}
        alt="Imagen del producto"
      />
      <Card.Body>
        <Card.Title title={nombre} className="text-truncate">
          {nombre}
        </Card.Title>
        <Card.Text>
          <strong>Precio:</strong> {precio}&#8364;
        </Card.Text>
        <Card.Text>
          <StockStatus stock={stock} />
        </Card.Text>
        <Card.Link href={`/productos/${idProducto}`}>Más detalles...</Card.Link>
      </Card.Body>
      <Card.Footer>
        <Stack className="justify-content-end" direction="horizontal" gap={2}>
          {controles}
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default TarjetaProducto;
