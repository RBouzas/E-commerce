INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES
('Crecepelo', 'Champú mágico que te hace crecer el pelo', 195.99, '/images/champu.png'),
('Ryzen 5 5550U', 'Procesador muy potente que hace funcionar este portátil', 146.15, '/images/procesador.png'),
('Chorizo portuano', 'Ya te imaginas', 0.50, '/images/truño.png'),
('Kuikma Power Hard', 'Pala de pádel utilizada por el famoso jugador Roy', 79.99, '/images/pala.png'),
('Pan', 'Perfecto acompañamiento para la comida', 1.15, '/images/pan.png');

INSERT INTO usuarios (nombre, contrasenha) VALUES
('Cristiano', '{noop}monoronaldo'),
('Joaquin', '{noop}enmividahulio');

INSERT INTO carrito (idProducto, idUsuario) VALUES
(2, 1),
(5, 1);