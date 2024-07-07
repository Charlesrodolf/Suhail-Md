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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_43_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICA1NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDgxLFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMxLFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDczLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhEOVZFOUFuWkF4cnhGTHBLR0JESlVWZW9vSmo1QWV0YlArYk5Na01zclU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjc5al9JXzNfUnRhRm5JWVVoZkZQYVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmVhY2MwZTgtNmEyZC00NTFmLWE5ODEtOGFhOGI4ODYzMzYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDEsXG4gICAgICAxMDMsXG4gICAgICAxOCxcbiAgICAgIDE2MSxcbiAgICAgIDIwOCxcbiAgICAgIDIwOSxcbiAgICAgIDIyMyxcbiAgICAgIDE2NixcbiAgICAgIDY5LFxuICAgICAgMjUyLFxuICAgICAgMTgsXG4gICAgICAyMjIsXG4gICAgICAyOSxcbiAgICAgIDEzNyxcbiAgICAgIDU4LFxuICAgICAgMjAxLFxuICAgICAgMTkzLFxuICAgICAgMjUyLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDI0NSxcbiAgICAgIDExMCxcbiAgICAgIDExMCxcbiAgICAgIDE2MixcbiAgICAgIDYzLFxuICAgICAgOTgsXG4gICAgICAxNTcsXG4gICAgICAyMTgsXG4gICAgICAxNjksXG4gICAgICAxNjAsXG4gICAgICAxNzcsXG4gICAgICAyMTAsXG4gICAgICAxODAsXG4gICAgICA2MyxcbiAgICAgIDI0NyxcbiAgICAgIDcsXG4gICAgICAxNzgsXG4gICAgICAyOCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pFMUxNR0VQdlZxTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCVGJzOEVOdWZxZzRlcnFrcURER3FEdFJubTYrbGdGYVNCSC8yblpPM1NBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitTeXVKblpoYmVmNkc5eklVa1pmdUJjcS9md1ZILzlPT1hKaVY3MzIrb3hlWTFUN1c3M2wvUTZrT0x0clZUVnpFUGZNdlU5V2RTK3lmRmR4WnNjVUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpldG0wQmt1bVVudGkwbXl5ZEZzeFJBeGNBNkhGbXVjemxzQlhlS3VPNlZJWmh1bkRuV21DZmUzVnZheVhWa1A5MjJvNWtuemRma3ZVSzhIM1RsZEN3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTIxNTUxOTM1MTk2OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Xq/CdmIXwnZiFLvCdl5bwnZe88J2XulwiLFxuICAgIFwibGlkXCI6IFwiMjU1NzI3MTE3NTcwMTk2OjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MjE1NTE5MzUxOTY5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMzEwMDhcbn0iCn0=6"  // PUT your SESSION_ID 


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
