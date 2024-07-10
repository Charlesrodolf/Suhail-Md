const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_26_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZzYwOUU4T3lEenAxYnpPL1AxYndmWGNBSWhZenhjaC9YSGJpemp2aTJsTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODVEZ2ZCbUZRSzJkZzdLYzAtamtiQVwiLFxuICBcInBob25lSWRcIjogXCI2ZjZlMjE4MC1hZjFiLTRkZjYtYjkwMi1lOWZkZTYwMGM1NzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAyNDAsXG4gICAgICAxMTIsXG4gICAgICA1MSxcbiAgICAgIDEyNyxcbiAgICAgIDE2NixcbiAgICAgIDg1LFxuICAgICAgMTgsXG4gICAgICAyMzIsXG4gICAgICAxNDYsXG4gICAgICAyMzAsXG4gICAgICAxNzAsXG4gICAgICAxODcsXG4gICAgICAxMTksXG4gICAgICAxNTYsXG4gICAgICAxMDYsXG4gICAgICAyMixcbiAgICAgIDk5LFxuICAgICAgMjMxLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDEzMyxcbiAgICAgIDQ0LFxuICAgICAgODAsXG4gICAgICA2MyxcbiAgICAgIDExOCxcbiAgICAgIDExNixcbiAgICAgIDc1LFxuICAgICAgMTA4LFxuICAgICAgNDIsXG4gICAgICAyNTUsXG4gICAgICAxNzEsXG4gICAgICAyMjUsXG4gICAgICAxMzEsXG4gICAgICAxMDEsXG4gICAgICAyMTksXG4gICAgICA2NSxcbiAgICAgIDIwNixcbiAgICAgIDE4NyxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tTU3pzWUJFUFN6dXJRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQlRiczhFTnVmcWc0ZXJxa3FEREdxRHRSbm02K2xnRmFTQkgvMm5aTzNTQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5S0VpaGJyUExpQWVnVWZDRHZzUGd1VkN0ZjM5WWpoQUJGUWF3YURxb2xqYWdJTkgrWENMT2hBNkd6UTAzUFQ5Y0VOOGV1dlBzbEcwYlYrOUFVbXFDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2QjJJR0tYeDNOdk5aQ1VyWE1NdkxyVllOM1o5RE1tTWQvTDVCOWFhSUI1TXVLVGxkamIxQmFEbG9qRmRpWVF0NDJCNXV1M2VYZTVjL3Bub1FZRVNodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUyMTU1MTkzNTE5Njk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhjq/hj53hj6Lhjrvhjq8g4Y6+4Y634Y6s4Y624Y6vXCIsXG4gICAgXCJsaWRcIjogXCIyNTU3MjcxMTc1NzAxOTY6MTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MjE1NTE5MzUxOTY5OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjIxNTU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGgxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaQWc1Y1lZSmlVR2R5dXo5SHFEd1UrRlJYSHZ3VCtiTm5DRWJ3Z3VJa2hFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNjUxNjM4OCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MjEzNjI4OTBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuSElYQUs1WCtBL2VYOU93OFB0Y2hHVitMRkg5NXl1VjZ3VTJqRXVUY1dnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNjUxNjM4OCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNl19LFwidGltZXN0YW1wXCI6XCIxNzIwNjIxMzY5OTQ5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGh5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieGJ3d2xmYndRNjZiY3lsS1paVmFvYU5XY3lYaFFIUkw3N2ppeUhQYzcvcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTY1MTYzODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM1NDc3NDcwNFwifSIKfQ==" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
