import Pagination from "react-bootstrap/Pagination";

const ControlPaginacion = ({ pagina, totalPaginas, onCambioPagina }) => {
  const minima = Math.max(1, pagina - 1);
  const maxima = Math.min(totalPaginas, minima + 2);
  const paginas = [];

  for (let numero = minima; numero <= maxima; numero++) {
    if (numero > 0 && numero <= totalPaginas) {
      paginas.push(numero);
    }
  }

  return (
    <div className="mx-auto">
      <Pagination>
        <Pagination.First
          disabled={pagina === 1}
          onClick={() => onCambioPagina(1)}
        />
        <Pagination.Prev
          disabled={pagina === 1}
          onClick={() => onCambioPagina(pagina - 1)}
        />
        {paginas.map((numero) => (
          <Pagination.Item
            key={numero}
            active={numero === pagina}
            onClick={() => onCambioPagina(numero)}
          >
            {numero}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={pagina === totalPaginas}
          onClick={() => onCambioPagina(pagina + 1)}
        />
        <Pagination.Last
          disabled={pagina === totalPaginas}
          onClick={() => onCambioPagina(totalPaginas)}
        />
      </Pagination>
    </div>
  );
};

export default ControlPaginacion;
