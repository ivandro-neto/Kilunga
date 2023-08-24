<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $recipient = "geral@kilunga.net"; // Replace with your email address
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $headers = "From: " . $_POST["email"];

    if (mail($recipient, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>