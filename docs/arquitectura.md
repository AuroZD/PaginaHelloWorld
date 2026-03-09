# Arquitectura del Sistema

## Descripción

La aplicación sigue una arquitectura **cliente-servidor tradicional**, separando las responsabilidades entre frontend, backend y base de datos.

---

## Frontend

El frontend se encarga de la interacción con el usuario.

Tecnologías utilizadas:

* HTML5
* CSS3
* JavaScript (ES6)

Funciones principales:

* Mostrar información del club
* Navegación entre secciones
* Animaciones y efectos visuales
* Envío de formulario de contacto

---

## Backend

El backend está desarrollado en **PHP**, encargado de procesar los datos enviados desde el frontend.

Responsabilidades:

* Procesamiento de formularios

Archivo principal de conexión:

```
include/conexion.php
```


---

## Flujo de funcionamiento

1. El usuario accede al sitio web.
2. Completa el formulario de contacto.
3. El frontend envía la información al servidor.
4. PHP procesa la información.
5. Los datos se mandan al correo de contacto del club.
