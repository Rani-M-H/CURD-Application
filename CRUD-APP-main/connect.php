Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
Header set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"





<?php
$servername = "localhost";
$username = "username"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "studentdetails"; // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$city = $_POST['city'];
$comment = $_POST['comment'];


$sql = "INSERT INTO students (name, email, ContactNumber,city,Comment) VALUES ('$name', '$email', '$number','$city',''$comment)";

if ($conn->query($sql) === TRUE) {
  echo json_encode(array('message' => 'Student data saved successfully'));
} else {
  echo json_encode(array('error' => 'Error: ' . $sql . '<br>' . $conn->error));
}

$conn->close();
?>
