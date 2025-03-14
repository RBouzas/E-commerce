const StockStatus = ({ stock }) => {
  if (stock < 1) return <span className="text-danger">Agotado</span>;

  if (stock < 5) return <span className="text-warning">Últimas unidades</span>;

  return <span className="text-success">En stock</span>;
};

export default StockStatus;
