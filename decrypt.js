var CryptoJS = require("crypto-js");

const key = '0123456789abcdef0123456789abcdef'
const iv = '0000000000000000'

const ciphertext = CryptoJS.enc.Base64.parse("0EmVS69YUBCibylCWo3SFW5qtM7YU/rRXHnrIsewMErikpR8y9ZfnNjm/zYh8GCA");
const encryptedCP = CryptoJS.lib.CipherParams.create({
  ciphertext: ciphertext,
  formatter: CryptoJS.format.OpenSSL
});

const decryptedWA = CryptoJS.AES.decrypt(
    encryptedCP,
    CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv)
});

const decryptedUtf8 = decryptedWA.toString(CryptoJS.enc.Utf8);

console.log(decryptedUtf8)
