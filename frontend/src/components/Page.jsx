const Loading = () => {
  return "Loading....";
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/carrito">Carrito</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
        <li>
          <a href="/registro">Registro</a>
        </li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <ul>
      <li>Página web creada por Rodrigo Bouzas</li>
      <li>Desarrollo web en entorno cliente</li>
    </ul>
  );
};

const Page = ({ loading, children }) => {
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
