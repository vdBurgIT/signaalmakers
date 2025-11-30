<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message', 'customerType'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Het veld '{$field}' is verplicht"]);
        exit();
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ongeldig e-mailadres']);
    exit();
}

// Sanitize input
$name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
$company = !empty($data['company']) ? htmlspecialchars($data['company'], ENT_QUOTES, 'UTF-8') : 'Niet opgegeven';
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = !empty($data['phone']) ? htmlspecialchars($data['phone'], ENT_QUOTES, 'UTF-8') : 'Niet opgegeven';
$address = !empty($data['address']) ? htmlspecialchars($data['address'], ENT_QUOTES, 'UTF-8') : 'Niet opgegeven';
$subject = htmlspecialchars($data['subject'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8');

// Convert customer type to readable format
$customerTypeMap = [
    'msp' => 'MSP / IT-bedrijf',
    'installateur' => 'Installatiebedrijf',
    'zakelijk' => 'Zakelijke klant'
];
$customerType = isset($customerTypeMap[$data['customerType']]) ? $customerTypeMap[$data['customerType']] : $data['customerType'];

// Email configuration
$to = 'info@signaalmakers.nl';
$email_subject = 'Contactformulier: ' . $subject;

// Create email body
$email_body = "Nieuw bericht via contactformulier signaalmakers.nl\n\n";
$email_body .= "==============================================\n\n";
$email_body .= "CONTACTGEGEVENS\n";
$email_body .= "==============================================\n";
$email_body .= "Naam: {$name}\n";
$email_body .= "Bedrijf: {$company}\n";
$email_body .= "E-mail: {$email}\n";
$email_body .= "Telefoon: {$phone}\n";
$email_body .= "Adres/Plaats: {$address}\n";
$email_body .= "Type organisatie: {$customerType}\n\n";
$email_body .= "==============================================\n\n";
$email_body .= "ONDERWERP\n";
$email_body .= "==============================================\n";
$email_body .= "{$subject}\n\n";
$email_body .= "==============================================\n\n";
$email_body .= "BERICHT\n";
$email_body .= "==============================================\n";
$email_body .= "{$message}\n\n";
$email_body .= "==============================================\n";
$email_body .= "Verzonden op: " . date('d-m-Y H:i:s') . "\n";
$email_body .= "IP-adres: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers
$headers = "From: noreply@signaalmakers.nl\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
try {
    $mail_sent = mail($to, $email_subject, $email_body, $headers);

    if ($mail_sent) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.'
        ]);
    } else {
        throw new Exception('Mail functie retourneerde false');
    }
} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw of neem direct contact met ons op via info@signaalmakers.nl'
    ]);
}
?>
