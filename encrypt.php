<?php
// 定義要加密的字串
$text = "這是一個需要加密的字串";

// 定義密鑰和 IV
$key = "0123456789abcdef0123456789abcdef";
$iv = "0000000000000000";

// 定義加密方式、加密模式、填充方式
$cipher = "aes-256-cbc";
$options = OPENSSL_RAW_DATA;

// 加密字串
$encrypted = openssl_encrypt($text, $cipher, $key, $options, $iv);

// 轉換加密後的字串成為 base64 格式
$encrypted_base64 = base64_encode($encrypted);

// 輸出加密後的字串
echo $encrypted_base64;