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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_19_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA5NixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICA3NixcbiAgICAgICAgMTkyLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4LFxuICAgICAgICA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTktsQ0JrRnkvNFRycDZxajA1MWo0bytmc3JyRzV0TnM5ZlVEdW5oZnNPYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNG5rN0FjUF9SQkdPQWxNb3VUbWlyQVwiLFxuICBcInBob25lSWRcIjogXCI0YjllMDI0MC02NmY4LTQ0MTAtYWI0Yi1kMDA5ZDFjMzQ5ZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgNTUsXG4gICAgICAxOTAsXG4gICAgICAyNDgsXG4gICAgICAxNDAsXG4gICAgICAxMDQsXG4gICAgICAyMzgsXG4gICAgICAyMjIsXG4gICAgICA4MCxcbiAgICAgIDE3LFxuICAgICAgODgsXG4gICAgICAyOSxcbiAgICAgIDE2MixcbiAgICAgIDE2MCxcbiAgICAgIDE3OSxcbiAgICAgIDMwLFxuICAgICAgOTAsXG4gICAgICA2MCxcbiAgICAgIDQ3LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDIzLFxuICAgICAgMjIyLFxuICAgICAgMTg0LFxuICAgICAgMTkxLFxuICAgICAgMTY2LFxuICAgICAgMjQxLFxuICAgICAgMjM3LFxuICAgICAgOTIsXG4gICAgICAxNixcbiAgICAgIDExOSxcbiAgICAgIDI1NSxcbiAgICAgIDQxLFxuICAgICAgMTIyLFxuICAgICAgMzcsXG4gICAgICAxODQsXG4gICAgICAxNzIsXG4gICAgICAyMTMsXG4gICAgICAxMzUsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMclI1WW9FRU8yVnc3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJUYnM4RU51ZnFnNGVycWtxRERHcUR0Um5tNitsZ0ZhU0JILzJuWk8zU0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQW9aWjJnMVBCaHRqQ2gxWmNzZkpGWDdNNXNBYVNaQ2ZHYXNvemtJR0xDY2FnRU5tMWQ3TzZ6bXFPR3FJWXRCbnpJZUlMai9qN2dJcVhoM0FpSFV0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYXpmTmVKVVJvWUVFbU9YSzkvRjBzMGtxejBwYUZPaUdsckRCVTY5U2s3WFZoS1ppWWxjVzRSNStmd2htblBjVExFTExUUFZYYlNXdkEyLy94MEovaUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MjE1NTE5MzUxOTY5OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Y6v4Y+d4Y+i4Y674Y6vIOGOvuGOt+GOrOGOtuGOr1wiLFxuICAgIFwibGlkXCI6IFwiMjU1NzI3MTE3NTcwMTk2OjEzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTIxNTUxOTM1MTk2OToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc2NTE2OFxufSIKfQ==" // PUT your SESSION_ID 


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
