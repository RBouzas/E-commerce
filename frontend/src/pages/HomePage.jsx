import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Container from "react-bootstrap/esm/Container";
import { useSearchParams } from "react-router-dom";
import useBorrarCarrito from "../client/useBorrarCarrito";
import useListaProductos from "../client/useListaProductos";
import Loading from "../components/Loading";
import Page from "../components/Page";

const CheckoutSuccessToast = ({ show, onHide }) => {
  return (
    <Toast
      onClose={() => onHide()}
      show={show}
      delay={3000}
      autohide
      bg="success"
    >
      <Toast.Header>
        <strong className="me-auto">¡Gracias por su compra!</strong>
      </Toast.Header>
      <Toast.Body>
        Su pedido se ha realizado correctamente y lo recibirá en unos días.
      </Toast.Body>
    </Toast>
  );
};

const CheckoutCanceledToast = ({ show, onHide }) => {
  return (
    <Toast
      onClose={() => onHide()}
      show={show}
      delay={3000}
      autohide
      bg="danger"
    >
      <Toast.Header>
        <strong className="me-auto">¡Error!</strong>
      </Toast.Header>
      <Toast.Body>Su pedido no se ha podido completar.</Toast.Body>
    </Toast>
  );
};

const Carrusel = () => {
  const { done, data, request } = useListaProductos(0, 100);

  useEffect(() => {
    request && request();
  }, [request]);

  return (
    <Loading loading={!done}>
      <section>
        <h2 className="text-center mb-4">¡Destacados para ti!</h2>
        <Container>
          <Row>
            {data?.productos
              .sort(() => (Math.random() > 0.5 ? -1 : 1))
              .slice(0, 6)
              .map(({ idProducto, nombre, imagen }) => (
                <Col key={idProducto} md={6} xl={2}>
                  <a href={`/productos/${idProducto}`}>
                    <Image src={imagen} alt={nombre} height="150px" />
                  </a>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </Loading>
  );
};

const HomePage = () => {
  const [search] = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCanceled, setShowCanceled] = useState(false);

  const { request: borrarCarrito } = useBorrarCarrito();
  useEffect(() => {
    const checkout = search.get("checkout");
    if (checkout === null) return;
    if (checkout === "success" && borrarCarrito) {
      borrarCarrito();
      setShowSuccess(true);
    }
    if (checkout === "canceled") {
      setShowCanceled(true);
    }
  }, [search, borrarCarrito, setShowSuccess, setShowCanceled]);

  return (
    <Page>
      <Container className="my-auto">
        <main>
          <ToastContainer className="p-3" position="top-end">
            <CheckoutSuccessToast
              show={showSuccess}
              onHide={() => setShowSuccess(false)}
            />
            <CheckoutCanceledToast
              show={showCanceled}
              onHide={() => setShowCanceled(false)}
            />
          </ToastContainer>
          <Carrusel />
          <section className="mt-5">
            <p>
              Bienvenidos a Technology Heaven, tu destino para lo último en
              tecnología y electrónica de consumo. En Technology Heaven, nos
              apasiona la tecnología y nos dedicamos a ofrecer una amplia gama
              de productos de alta calidad que mejorarán tu vida cotidiana.
              Desde portátiles de última generación y accesorios de ordenador
              hasta dispositivos móviles y equipos de audio.
            </p>
            <p>
              Tenemos todo lo que necesitas para estar a la vanguardia de la
              innovación. Nuestro objetivo es brindarte una experiencia de
              compra excepcional, con productos cuidadosamente seleccionados,
              descripciones detalladas y un servicio al cliente inigualable.
              Navega por nuestra tienda y descubre cómo Technology Heaven puede
              ayudarte a llevar tu mundo digital al siguiente nivel.
            </p>
            <p>
              Technology Heaven: Donde la tecnología y la innovación se
              encuentran.
            </p>
          </section>
        </main>
      </Container>
    </Page>
  );
};

export default HomePage;
