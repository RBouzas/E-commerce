import { useEffect } from "react";
import useListaProductos from "../client/useListaProductos";
import Page from "../components/Page";

const ItemCarrusel = ({ idProducto, imagen }) => (
  <div>
    <div>
      <a href={`/productos/${idProducto}`}>
        <img src={imagen} alt="Imagen del producto" height="100px" />
      </a>
    </div>
  </div>
);

const Carrusel = () => {
  const { done, data: listaProductos, request } = useListaProductos();

  useEffect(() => {
    request && request();
  }, [request]);

  if (!done) return null;

  return (
    <section>
      {listaProductos.map(({ idProducto, nombre, imagen }) => (
        <ItemCarrusel
          key={idProducto}
          imagen={imagen}
          idProducto={idProducto}
        />
      ))}
    </section>
  );
};

const HomePage = () => {
  return (
    <Page>
      <h1>Technology Heaven</h1>
      <main>
        <Carrusel />
        <section>
          <p>
            Bienvenidos a Technology Heaven, tu destino para lo último en
            tecnología y electrónica de consumo. En Technology Heaven, nos
            apasiona la tecnología y nos dedicamos a ofrecer una amplia gama de
            productos de alta calidad que mejorarán tu vida cotidiana. Desde
            portátiles de última generación y accesorios de ordenador hasta
            dispositivos móviles y equipos de audio.
          </p>
          <p>
            Tenemos todo lo que necesitas para estar a la vanguardia de la
            innovación. Nuestro objetivo es brindarte una experiencia de compra
            excepcional, con productos cuidadosamente seleccionados,
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
    </Page>
  );
};

export default HomePage;
