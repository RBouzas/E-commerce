# 🛒 Technology Heaven – eCommerce de Productos Tecnológicos

**Technology Heaven** es una tienda online moderna de productos tecnológicos. Permite a los usuarios explorar un catálogo de productos, gestionar su carrito, marcar artículos como favoritos o deseados, y completar el proceso de compra. También incluye un panel de administración (backoffice) para gestionar productos y stock.

---

## 📸 Capturas

![Home](https://github.com/user-attachments/assets/4a994efc-c331-4255-950f-1ffb46225b7e)
![Lista autenticado](https://github.com/user-attachments/assets/e654dd92-15de-4119-9b01-7fad95d5c796)
![Carrito](https://github.com/user-attachments/assets/a3a0948a-15d5-4f17-9873-7f840ccbd5c7)
![Deseados](https://github.com/user-attachments/assets/cb7b0f93-b3ee-4242-b1d7-9d1dac0d9684)
![Favoritos](https://github.com/user-attachments/assets/f563f6b5-c930-4988-89bf-efabb716ce47)
![Panel](https://github.com/user-attachments/assets/a2e9c6ab-091a-4696-b96a-851170d8f0ab)
![Inventario](https://github.com/user-attachments/assets/d4a2e897-3800-43d7-8151-81e291fcc41c)
![Login](https://github.com/user-attachments/assets/416f2009-5a25-4ad6-aa4e-65adafb13399)

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
