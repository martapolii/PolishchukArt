<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['guestName'];
    $email = $_POST['guestEmail'];
    $message = $_POST['message'];
    
    $to = 'polishchukart@gmail.com';
    $subject = 'New Message from PolishchukArt Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    if (mail($to, $subject, $body)) {
        echo '<script>alert("Your message has been sent successfully.");</script>';
    } else {
        echo '<script>alert("There was an error sending your message. Please try again later.");</script>';
    }
}

