<?php
// Simple mail test script
// Access via: https://signaalmakers.nl/api/test-mail.php

$to = 'info@signaalmakers.nl';
$subject = 'Test e-mail van signaalmakers.nl';
$message = "Dit is een test e-mail verzonden op " . date('d-m-Y H:i:s');

$domain = $_SERVER['HTTP_HOST'] ?? 'signaalmakers.nl';
$from = 'noreply@' . str_replace('www.', '', $domain);

$headers = "From: Test Script <{$from}>\r\n";
$headers .= "Reply-To: {$from}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

echo "<!DOCTYPE html><html><head><title>Mail Test</title></head><body>";
echo "<h1>Mail Test</h1>";
echo "<p><strong>To:</strong> {$to}</p>";
echo "<p><strong>From:</strong> {$from}</p>";
echo "<p><strong>Subject:</strong> {$subject}</p>";
echo "<hr>";

$result = @mail($to, $subject, $message, $headers);

if ($result) {
    echo "<p style='color: green;'><strong>✓ Mail verzonden!</strong></p>";
    echo "<p>Check je inbox op {$to}</p>";
    echo "<p><em>Let op: Het kan 1-5 minuten duren voordat de mail binnenkomt. Check ook je spam folder!</em></p>";
} else {
    echo "<p style='color: red;'><strong>✗ Mail NIET verzonden!</strong></p>";
    echo "<p>De mail() functie retourneerde false.</p>";

    $last_error = error_get_last();
    if ($last_error) {
        echo "<p><strong>Error:</strong> " . htmlspecialchars($last_error['message']) . "</p>";
    }

    echo "<h3>Mogelijke oorzaken:</h3>";
    echo "<ul>";
    echo "<li>PHP mail() is niet geconfigureerd op de server</li>";
    echo "<li>DirectAdmin mail settings zijn niet correct</li>";
    echo "<li>De server heeft geen SMTP server</li>";
    echo "<li>SPF/DKIM records ontbreken</li>";
    echo "</ul>";

    echo "<h3>Oplossingen:</h3>";
    echo "<ul>";
    echo "<li>Check DirectAdmin Email settings</li>";
    echo "<li>Gebruik PHPMailer of SMTP authenticatie</li>";
    echo "<li>Contact je hosting provider</li>";
    echo "</ul>";
}

echo "<hr>";
echo "<h3>Server Info:</h3>";
echo "<p><strong>PHP Version:</strong> " . phpversion() . "</p>";
echo "<p><strong>Server:</strong> " . ($_SERVER['SERVER_SOFTWARE'] ?? 'Unknown') . "</p>";
echo "<p><strong>Host:</strong> " . $domain . "</p>";

// Check if mail function exists
if (function_exists('mail')) {
    echo "<p style='color: green;'>✓ mail() functie bestaat</p>";
} else {
    echo "<p style='color: red;'>✗ mail() functie bestaat NIET!</p>";
}

echo "</body></html>";
?>
