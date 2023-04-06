<?php
// Output messages
$responses = [];
// Check if the form was submitted
if (isset($_POST['name'], $_POST['email'], $_POST['message'], $_POST['services'])) {
	// Validate email adress
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$responses[] = 'Email is not valid!';
	}
	// Make sure the form fields are not empty
	if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || empty($_POST['services'])) {
		$responses[] = 'Please complete all fields!';
	} 
	// If there are no errors
	if (!$responses) {
		// Where to send the mail? It should be your email address
		$to      = 'admin@burpproductions.com';
		// Send mail from which email address?
		$from = $_POST['email'];
		// Mail subject
		$subject = $_POST['services'];
		// Mail message
		$message = $_POST['message'];
		// Mail headers
		$headers = 'From: ' . $from . "\r\n" . 'Reply-To: ' . $_POST['email'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
		// Try to send the mail
		if (mail($to, $subject, $message, $headers)) {
			// Success
			$responses[] = 'Message sent!';		
		} else {
			// Fail
			$responses[] = 'Message could not be sent! Please check your mail server settings!';
		}
	}
}
?>