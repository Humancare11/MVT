<?php

// Never let PHP warnings/notices print into the response body.
// Anything printed before the JSON breaks JSON.parse() on the frontend.
ini_set('display_errors', '0');
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function respond($status, $message, $code = 200) {
    http_response_code($code);
    echo json_encode(["status" => $status, "message" => $message]);
    exit;
}

// Strip CR/LF so user input cannot inject extra mail headers.
function clean($value) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], ' ', (string) $value));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond("error", "Invalid request method.", 405);
}

$name        = clean($_POST['name'] ?? '');
$email       = clean($_POST['email'] ?? '');
$phone       = clean($_POST['phone'] ?? '');
$nationality = clean($_POST['nationality'] ?? '');
$message     = trim($_POST['message'] ?? ''); // line breaks are fine in the body

if ($name === '' || $email === '' || $phone === '') {
    respond("error", "Please fill all required fields.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond("error", "Please enter a valid email address.");
}

$to      = "ops@humancareworldwide.com";
$subject = "New Contact Form Submission - " . $name;

$body  = "New Contact Form Submission\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Nationality: " . ($nationality !== '' ? $nationality : '-') . "\n";
$body .= "Message:\n" . ($message !== '' ? $message : '-') . "\n\n";
$body .= "Submitted: " . date('d M Y, H:i') . "\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\n";

// IMPORTANT: this must be a real mailbox created in Hostinger hPanel
// under Emails, on the SAME domain this file is hosted on.
// Using an address from another domain breaks SPF and the mail is
// dropped or marked spam. Replies still go to the enquirer via Reply-To.
$from = "noreply@humancaremedicaltourism.com";

$headers   = [];
$headers[] = "From: Humancare Website <$from>";
$headers[] = "Reply-To: $name <$email>";
$headers[] = "Cc: md@humancareworldwide.com, medicaltourism@humancareworldwide.com, manager.dm@humancareworldwide.com";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "Content-Transfer-Encoding: 8bit";

$sent = @mail(
    $to,
    $subject,
    $body,
    implode("\r\n", $headers),
    "-f $from" // envelope sender, required by most shared hosts
);

if ($sent) {
    respond("success", "Thank you. Your request has been sent.");
}

error_log("Contact form mail() failed for $email");
respond("error", "Mail sending failed. Please call +91 98331 66697.", 500);