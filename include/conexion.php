<?php
// Configuración de la base de datos

//Segmento de código destinado para pruebas de forma local

$host = "localhost";        
$user = "root";             
$pass = "";                 
$db   = "nombre_tu_bd";     


//Segmento de código destinado a las pruebas en línea
/*
$host = "sql300.infinityfree.com";        
$user = "if0_41333934";             
$pass = "OmP3oupwbiEDp";                 
$db   = "nombre_tu_bd";     
*/

// Crear la conexión usando la extensión MySQLi
$conexion = mysqli_connect($host, $user, $pass, $db);

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Configurar el juego de caracteres a UTF-8 para que se vean bien los acentos
mysqli_set_charset($conexion, "utf8");

// Si llegamos aquí, la conexión es exitosa
// echo "Conexión establecida con éxito"; // Descomenta para probar
?>