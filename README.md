# 🛒 Technology Heaven – eCommerce de Productos Tecnológicos

**Technology Heaven** es una tienda online moderna de productos tecnológicos. Permite a los usuarios explorar un catálogo de productos, gestionar su carrito, marcar artículos como favoritos o deseados, y completar el proceso de compra. También incluye un panel de administración (backoffice) para gestionar productos y stock.

---

## 📸 Capturas

![Home](https://github.com/user-attachments/assets/1c954b02-a37b-4e30-9d61-86c36a6e967a)
![Lista de productos](https://github.com/user-attachments/assets/99a5bd6b-9048-47b4-a05c-eb8e3bd7bb75)
![Carrito](https://github.com/user-attachments/assets/2934c84c-458c-42b4-b9e2-d0d8f7c2ef62)
![Deseados](https://github.com/user-attachments/assets/dd7b07f1-d504-4ec6-a2c6-bdf0413b66de)
![Favoritos](https://github.com/user-attachments/assets/8dd351e1-8d52-494d-b16d-9e8938f8c6ca)
![Panel de control](https://github.com/user-attachments/assets/1f4e3f8a-75b1-4f79-9431-facf4ed9c6d3)
![Inventario](https://github.com/user-attachments/assets/565c00bf-b8c6-48e9-8c5f-212c775e6480)
![Login](https://github.com/user-attachments/assets/18121290-b0a9-42b0-97da-ae41218e090d)
![Registro](https://github.com/user-attachments/assets/4c1179a7-c394-4a42-b7ff-1caff5ecad39)
![Logout](https://github.com/user-attachments/assets/6f6ca74d-73ef-4342-b73e-848ba70c8527)

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
