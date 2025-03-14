INSERT INTO productos (nombre, descripcion, precio, imagen, stock) VALUES
('Laptop ASUS VivoBook', 'Laptop ASUS VivoBook con pantalla de 15.6 pulgadas, procesador Intel Core i5, 8GB de RAM y 256GB SSD.', 749.99, '/images/asus_vivobook.jpg', 0),
('Mouse Logitech MX Master 3', 'Mouse inalámbrico Logitech MX Master 3 con diseño ergonómico, múltiples botones personalizables y batería recargable.', 99.99, '/images/logitech_mx_master_3.jpg', 0),
('Teclado Mecánico Razer BlackWidow', 'Teclado mecánico Razer BlackWidow con switches verdes, retroiluminación RGB y teclas completamente programables.', 129.99, '/images/razer_blackwidow.jpg', 27),
('Monitor Dell UltraSharp', 'Monitor Dell UltraSharp de 27 pulgadas con resolución 4K UHD, panel IPS y tecnología de calibración de color.', 399.99, '/images/dell_ultrasharp.jpg', 10),
('Disco Duro Externo Seagate', 'Disco duro externo Seagate de 2TB con conexión USB 3.0, ideal para almacenar grandes cantidades de datos y copias de seguridad.', 89.99, '/images/seagate_2tb.jpg', 12),
('Auriculares Sony WH-1000XM4', 'Auriculares inalámbricos Sony WH-1000XM4 con cancelación de ruido activa, sonido de alta resolución y hasta 30 horas de batería.', 349.99, '/images/sony_wh1000xm4.jpg', 22),
('Cámara Canon EOS Rebel T7', 'Cámara réflex digital Canon EOS Rebel T7 con sensor de 24.1MP, grabación de video Full HD y conectividad Wi-Fi.', 499.99, '/images/canon_eos_rebelt7.jpg', 6),
('Impresora HP Envy 6055', 'Impresora multifunción HP Envy 6055 con impresión, escaneo y copiado, conectividad inalámbrica y compatibilidad con dispositivos móviles.', 149.99, '/images/hp_envy_6055.jpg', 8),
('Router TP-Link Archer AX50', 'Router WiFi TP-Link Archer AX50 con tecnología Wi-Fi 6, velocidades de hasta 3000 Mbps y cobertura mejorada.', 129.99, '/images/tp_link_archer_ax50.jpg', 40),
('Tablet Samsung Galaxy Tab S7', 'Tablet Samsung Galaxy Tab S7 con pantalla de 11 pulgadas, procesador Snapdragon 865+, 6GB de RAM y 128GB de almacenamiento.', 649.99, '/images/samsung_galaxy_tab_s7.jpg', 23),
('Smartwatch Apple Watch Series 6', 'Smartwatch Apple Watch Series 6 con pantalla Retina siempre activa, monitoreo de salud avanzado y GPS integrado.', 399.99, '/images/apple_watch_series_6.jpg', 37),
('Altavoz Inteligente Amazon Echo', 'Altavoz inteligente Amazon Echo de 4ta generación con Alexa, sonido de alta calidad y control de dispositivos domésticos inteligentes.', 99.99, '/images/amazon_echo.jpg', 9),
('Smart TV LG OLED55CXPUA', 'Smart TV LG OLED de 55 pulgadas con resolución 4K UHD, tecnología HDR y sistema operativo webOS.', 1399.99, '/images/lg_oled55cxpua.jpg', 16),
('Consola de Videojuegos PlayStation 5', 'Consola de videojuegos PlayStation 5 con disco duro SSD de 825GB, soporte para juegos 4K y controlador DualSense.', 499.99, '/images/playstation_5.jpg', 3),
('Bocina Portátil JBL Charge 4', 'Bocina portátil JBL Charge 4 con sonido estéreo de alta calidad, resistente al agua y batería de larga duración.', 149.99, '/images/jbl_charge_4.jpg', 4),
('Cámara de Seguridad Ring', 'Cámara de seguridad Ring con video HD, detección de movimiento, visión nocturna y comunicación bidireccional.', 199.99, '/images/ring_security_camera.jpg', 2),
('Reloj Garmin Forerunner 245', 'Reloj inteligente Garmin Forerunner 245 con GPS, monitoreo de actividad física, resistencia al agua y notificaciones inteligentes.', 299.99, '/images/garmin_forerunner_245.jpg', 11),
('Laptop Gaming MSI GF65 Thin', 'Laptop gaming MSI GF65 Thin con pantalla de 15.6 pulgadas, procesador Intel Core i7, 16GB de RAM y tarjeta gráfica NVIDIA GeForce GTX 1660 Ti.', 1099.99, '/images/msi_gf65_thin.jpg', 14),
('Kit de Iluminación Elgato Key Light', 'Kit de iluminación Elgato Key Light con brillo ajustable, temperatura de color personalizable y control inalámbrico.', 199.99, '/images/elgato_key_light.jpg', 8),
('Disco Duro Interno Samsung 970 EVO', 'Disco duro interno SSD Samsung 970 EVO de 1TB con tecnología NVMe, altas velocidades de lectura y escritura.', 169.99, '/images/samsung_970_evo.jpg', 17);

INSERT INTO usuarios (nombre, contrasenha, mail, mail_verificado, rol) VALUES
('admin', '$2a$10$LfVYxZgdal0kYzbLRS277O.q.CjHrcKWb61iWKv9xM4GhZeqJXFba', 'technologyheavenstore@gmail.com', true, 'ADMIN');

INSERT INTO favoritos (id_usuario, id_producto) VALUES 
(1,3),
(1,5);

INSERT INTO deseados (id_usuario, id_producto) VALUES 
(1,1),
(1,2);