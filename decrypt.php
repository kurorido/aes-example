<?php

// 定義要解密的字串
$encrypted_base64 = "0EmVS69YUBCibylCWo3SFW5qtM7YU/rRXHnrIsewMErikpR8y9ZfnNjm/zYh8GCA";

// 定義密鑰和 IV
$key = "0123456789abcdef0123456789abcdef";
$iv = "0000000000000000";

// 定義加密方式、加密模式、填充方式
$cipher = "aes-256-cbc";
$options = OPENSSL_RAW_DATA;

// 將加密後的字串解碼成二進位資料
$encrypted = base64_decode($encrypted_base64);

// 解密字串
$decrypted = openssl_decrypt($encrypted, $cipher, $key, $options, $iv);

// 輸出解密後的字串
echo $decrypted;