<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $datos_academicos = $_POST['academia'];
    $mensaje_usuario = $_POST['mensaje'];

    // Configuración del correo
    $destinatario = "emywar30@gmail.com";
    $asunto = "Nueva solicitud de ingreso al Club: " . $nombre;

    // Cuerpo del mensaje
    $cuerpo = "Solicitud de registro:\n\n";
    $cuerpo .= "Nombre: " . $nombre . "\n";
    $cuerpo .= "Correo: " . $email . "\n";
    $cuerpo .= "Semestre/Carrera: " . $datos_academicos . "\n";
    $cuerpo .= "Mensaje: " . $mensaje_usuario . "\n";

     // Cabeceras para que el correo llegue bien
   	$headers = "From: contacto@tu-sitio-en-infinityfree.com" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        header("Location: ../index.html?status=success");
    } else {
        header("Location: ../index.html?status=error");
    }
}
?>