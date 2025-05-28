# 🛒 Technology Heaven – eCommerce de Productos Tecnológicos

**Technology Heaven** es una tienda online moderna de productos tecnológicos. Permite a los usuarios explorar un catálogo de productos, gestionar su carrito, marcar artículos como favoritos o deseados, y completar el proceso de compra. También incluye un panel de administración (backoffice) para gestionar productos y stock.

---

## 📸 Capturas

> *(Pendiente de subir capturas finales)*

<!-- Ejemplo de cómo se vería cuando las subas
![Home](./screenshots/home.png)
![Carrito](./screenshots/cart.png)
-->

---

## 🚀 Funcionalidades principales

### 🧑 Usuario

- 📝 Registro con verificación por correo electrónico.
- 🔐 Inicio de sesión seguro.
- 🛍️ Añadir productos al carrito.
- ❤️ Marcar como favoritos.
- 🕒 Lista de deseados si no hay stock.
- 💳 Compra completa.

### 🧑‍💼 Administrador

- 🔑 Acceso a panel de administración.
- ➕➖ Crear, editar y eliminar productos.
- 📦 Gestión de stock y precios.

---

## 🛠️ Tecnologías utilizadas

- 💻 **Frontend**: React + Bootstrap React
- 🛠️ **Backend**: Spring Boot
- 🗃️ **Base de datos**: MySQL
- 🔐 **Autenticación**: BCryptPasswordEncoder
- 📧 **Verificación de email**: JavaMailSender

---

## 📦 Instalación local

1. Crear una base de datos en **WAMP** con el nombre `ecommercebd`.
2. Editar los archivos `application.properties` y `secret.properties` con tu configuración correo electrónico.
3. Abrir el proyecto con **VS Code**.
4. En la terminal, ejecutar `mvn install`
5. Pulsar el botón de inicio de la aplicación en **VS Code**.
6. Acceder a: http://localhost:8080/

#### 🔗 **Mapa de navegación**

## 🗺️ Mapa de navegación

- `/` → Página de inicio
- `/productos` → Lista de productos
- `/producto/:id` → Detalle del producto
- `/carrito` → Carrito de compra
- `/favoritos` → Lista de favoritos
- `/deseados` → Lista de productos sin stock
- `/login` / `/registro` → Autenticación
- `/admin` → Backoffice (solo administrador)


## 👤 Autor

- Nombre: **Rodrigo Bouzas Quiroga**
- GitHub: [github.com/RBouzas](https://github.com/RBouzas)
