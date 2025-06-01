<?php
$SUPABASE_URL = "https://vmueeybtjxkmumzftldv.supabase.co";
$SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdWVleWJ0anhrbXVtemZ0bGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2ODg2MzMsImV4cCI6MjA2NDI2NDYzM30.g6TLb1Z2cOjghSxYs2GIGUxL7cwqGFNY2vVIO0tn2QI";

$url = "$SUPABASE_URL/rest/v1/owners";

$options = [
    "http" => [
        "header" => [
            "apikey: $SUPABASE_API_KEY",
            "Authorization: Bearer $SUPABASE_API_KEY",
            "Content-Type: application/json"
        ],
        "method" => "GET"
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to fetch data"]);
} else {
    header("Content-Type: application/json");
    echo $response;
}
?>

