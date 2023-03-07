var CryptoJS = require("crypto-js");

// 定義要加密的字串
const text = "這是一個需要加密的字串";

const key = '0123456789abcdef0123456789abcdef'
const iv = '0000000000000000'

const cipher = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv), // parse the IV 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
})

console.log(cipher.toString())
