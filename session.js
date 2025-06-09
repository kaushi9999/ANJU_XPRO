//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 4.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1uc1RsU3BWRTU4TGo5OWt5dnJ3Y25Kei9WSzFETVplWU5OSDJqcndFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjFPZ0o3NmdMN0xwOEE3Mkd1c2NiUHMzYXlrSUdhdVhHbitrOVEyMzJtQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SlZwVVVBL0tTa1l1RnJYN3pISHNJUmNzb0YzZ1Q2Qm8wc1I5YnJ3RVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VU9pMm92OG4yck5jMVYrMmVnM09yb0FycEdhNjRpd2wrVmw3Y1JZaWdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndBSWZ4MGk5REp3eEJ2V3FvQ1pleC85NWhHM2p3RVRRYUxNTzh6WDhtR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVMRm1sRC83SzM5cFowWEtBN0puemhlTGlTUkFyQnhYb1B5emVYaDVMalE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tvQTFXNHFrZXBBaFEreXIxdXpBMDRJM3diTnpSNDA4aC9RcTFRTUlGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVZaYVo4aFoyYTJvKytsZitvWE4vcHYzQVN0cGJkQlpyZnZPQ2pyVEZsYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcxYXhIOWhmQ2xiU3JKY1ZKSFhacXRVSGZ3Umk3dEZJclZlN1JENC83b3ovem9SVGx3YnMwWlA2encrSjNUN3hYTERFaEc0YzR0L3pWcFg3MlBnU0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJUejlaQk9DZmtJaFJyZHdhbFFOdXVjZEtrV2ZnSnAzUnpDd3BJSWpXUUY4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5Tm82QlpSd1N6R3NXZHMyN1VRZTFRIiwicGhvbmVJZCI6IjU3OGI1ZDdjLTkwZjYtNDU5Mi04MDlkLTk0ZmNjMzVmNGM3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJESkFpUE9kSVo1OEl3WHFPQTdxcC9TVU95YXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2x0bzZQSWpEdFBKM2hTNW56c0FzMFVNVnFRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZDUTlDN0JXIiwibWUiOnsiaWQiOiI5NDc2OTkxODAwNDo4NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPXG5MXG5EXG5cbktcbklcbk5cbkdcblxuTlxuSVxuTVxuQVxuXG5CXG5CXG5IIiwibGlkIjoiMTExODg5NDM0NTQzMzk6ODZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdWVwcW9ERUxuU21jSUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQaHlkeWV1RFBqTEtBSjd6aVppTG94b1FXeFNkYTBwdGl4U2ZXdWZuNFFZPSIsImFjY291bnRTaWduYXR1cmUiOiJtaDk1eTR4d3dCRUh6cnQxWjdETkEzTS95VmwxeTFlVFNmVUwreXJMWjhYODZCN3lSRldjK21ma1VtaWo0ZFRhTElQazdyTnlxaEkwQldidkIrSFdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN05GYk5NVWduOHJwYWVzWTBBN0Q0cTFxQUQ0SlhvMnN2Y25YemFPK0FRRXBIQjkwN1g5bEhCbDgvUzdyZHVBc01WRCtyQUhGbTcwemlsR1lzR3FmQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2OTkxODAwNDo4NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUNGNuY25yZ3o0eXlnQ2U4NG1ZaTZNYUVGc1VuV3RLYllzVW4xcm41K0VHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk0NDQ5MzYsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || '0gYFhKO2NytqSO3iHliz0tEII9AeXz2kBwwe",
    GITHUB_USERNAME: process.env.GITHUB_USERNAME || "kaushi9999",
    SUDO: process.env.SUDO ? process.env.SUDO.split(",") : ["", "94769918004"],
    PORT: process.env.PORT || "8000",
    SESSION_DIR: process.env.SESSION_DIR || "session",
    FOOTER: process.env.FOOTER || "> QUEEN ANJU XPRO\n> Developed by Mr. Rashmika\n> GitHub Repository: github.com/Mrrashmika/QUEEN_ANJU_xPro\n\ud83c\udf1f Premium Version | Advanced Features | Secure & Reliable \ud83c\udf1f\n\u00a9 2025 QUEEN ANJU XPRO. All rights reserved." 
  };
  
