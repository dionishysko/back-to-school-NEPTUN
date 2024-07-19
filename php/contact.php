<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add further validation and sanitization here

    // For testing purposes, let's just display the submitted data
    echo "<h2>Thank you for your message!</h2>";
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Message: $message</p>";
} else {
    // If someone tries to access this script directly without submitting the form
    echo "Access denied.";
}
?>
