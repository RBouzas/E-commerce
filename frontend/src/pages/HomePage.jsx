import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import useListaProductos from "../client/useListaProductos";
import Page from "../components/Page";

const Carrusel = () => {
  const { done, data, request } = useListaProductos(0, 100);

  useEffect(() => {
    request && request();
  }, [request]);

  if (!done) return null;

  return (
    <section>
      <h2 className="text-center mb-4">¡Destacados para tí!</h2>
      <Container>
        <Row>
          {data.productos
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
  );
};

const HomePage = () => {
  return (
    <Page>
      <Container className="my-auto">
        <main>
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
