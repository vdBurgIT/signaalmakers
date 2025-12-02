<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// === Configuration ===
$TO_EMAIL = 'info@signaalmakers.nl';
$FROM_ENVELOPE = 'noreply@signaalmakers.nl';
$FROM_HEADER = 'noreply@signaalmakers.nl';
$SITE_NAME = 'signaalmakers.nl';

// Get POST data
$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data) || $data === []) {
    $data = $_POST; // fallback
}

// Rate limiting per IP (60 seconds cooldown) - TEMPORARILY DISABLED FOR TESTING
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
// TODO: Re-enable rate limiting after testing
/*
$token = hash('sha256', $ip);
$rlfile = sys_get_temp_dir() . "/sm_contact_$token";
$now = time();
$rateLimitSeconds = 60;

if (is_file($rlfile)) {
    $lastSubmit = (int)@file_get_contents($rlfile);
    $timeSinceLastSubmit = $now - $lastSubmit;

    if ($timeSinceLastSubmit < $rateLimitSeconds) {
        $waitTime = $rateLimitSeconds - $timeSinceLastSubmit;
        http_response_code(429);
        echo json_encode([
            'ok' => false,
            'error' => "Even wachten a.u.b. U kunt nog een bericht versturen over {$waitTime} seconden."
        ]);
        exit;
    }
}
@file_put_contents($rlfile, (string)$now);
*/

// Extract and sanitize input
$name = trim((string)($data['name'] ?? ''));
$company = trim((string)($data['company'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$address = trim((string)($data['address'] ?? ''));
$customerType = trim((string)($data['customerType'] ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

// Validate required fields
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $subject === '' || $message === '' || $customerType === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Vul alle verplichte velden correct in']);
    exit;
}

// Convert customer type to readable format
$customerTypeMap = [
    'msp' => 'MSP / IT-bedrijf',
    'zakelijk' => 'Zakelijke klant',
    'offerte' => 'Offerte-aanvraag'
];
$customerTypeReadable = $customerTypeMap[$customerType] ?? $customerType;

// Build email subject
$emailSubject = "Nieuw bericht via {$SITE_NAME} - {$name}";

// Build email body
$lines = [
    "Nieuw bericht via contactformulier {$SITE_NAME}",
    "",
    "CONTACTGEGEVENS",
    "==============================================",
    "Naam: {$name}",
    "E-mail: {$email}",
    $company !== '' ? "Bedrijf: {$company}" : null,
    $phone !== '' ? "Telefoon: {$phone}" : null,
    $address !== '' ? "Adres/Plaats: {$address}" : null,
    "Type organisatie: {$customerTypeReadable}",
    "",
    "ONDERWERP",
    "==============================================",
    $subject,
    "",
    "BERICHT",
    "==============================================",
    $message,
    "",
    "==============================================",
    "Verzonden op: " . date('d-m-Y H:i:s'),
    "IP-adres: {$ip}",
];
$body = implode("\n", array_values(array_filter($lines, fn($v) => $v !== null)));

// Build headers
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: Website {$SITE_NAME} <{$FROM_HEADER}>";
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = "X-Mailer: PHP/" . PHP_VERSION;
$headersStr = implode("\r\n", $headers);

// Set envelope sender (important for DirectAdmin!)
$additionalParams = "-f {$FROM_ENVELOPE}";

// Send email
$ok = @mail($TO_EMAIL, $emailSubject, $body, $headersStr, $additionalParams);

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Versturen mislukt. Probeer het later opnieuw of neem direct contact op via ' . $TO_EMAIL]);
}
?>
