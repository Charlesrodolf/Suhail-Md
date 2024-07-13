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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8494423285";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_28_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYzLFxuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2d3lmQWE1RmhBVStUZFN6eUVQVTZNVjV1NU92L0VHUzV5UVhyK0FMZXRjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtUVJmbXN2d1JvYVNybHJOcW00OXlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1YjQ1NDM1LTViZmYtNDc1MS04ZDdhLTQyMDRhNDc1MzVjNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgNzMsXG4gICAgICAyMjAsXG4gICAgICAxNTMsXG4gICAgICAxNDUsXG4gICAgICAxODEsXG4gICAgICAxODQsXG4gICAgICA2LFxuICAgICAgMTAwLFxuICAgICAgMTAxLFxuICAgICAgMTE5LFxuICAgICAgNjEsXG4gICAgICAxODMsXG4gICAgICAxNTMsXG4gICAgICAxODYsXG4gICAgICAxMTUsXG4gICAgICA4MSxcbiAgICAgIDIxMyxcbiAgICAgIDcxLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAxMTAsXG4gICAgICAxMzksXG4gICAgICAyNTIsXG4gICAgICA1NyxcbiAgICAgIDMzLFxuICAgICAgMjQ4LFxuICAgICAgMTQ2LFxuICAgICAgNDIsXG4gICAgICA0OCxcbiAgICAgIDIxNixcbiAgICAgIDQ4LFxuICAgICAgMzYsXG4gICAgICAzMCxcbiAgICAgIDEyNCxcbiAgICAgIDgwLFxuICAgICAgMjM4LFxuICAgICAgMzIsXG4gICAgICAzMixcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlhcE5vS0VQZml5N1FHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwSld0LytWM1lLL3RyMGl4cmdSL2JxQjB3cU5aSHhQdC81ZWhBcVdqU1dzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNSdHRDYXBLZmtmMGg0OGR1aVIxYVlNeE1KOHMyUzBWR0VYbis0c2dZampyYkFsUXQrWGFIZ2dHOWl4RGlQUXQ3cTlIeEljK056YzhOS3hOR0lKOGlRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1VNWV0NVJlWUU0K3BOQ1EyOXVGbWt4RzBPdm5vbHJmUmdrcGZmUGZpMVhZQU5GcjdwWXFCYnlRN0ZVVW8rSllQeTZSQWlwcXlZSWZTdm9MQndPV0RRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTg0OTQ0MjMyODU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk5Nzc2NjI4OTIwNDUzOjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODQ5NDQyMzI4NTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkwNjEwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlieVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWJ5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUM4UkdSdDRRSDVreDBqY2I2cFpPbS91dU1wUDg0eG1zSkJOVEJ1dmRYVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODczNjkxNDgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNDY5MzUwNDNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJYnouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvMFVudWJVcFE2MC8xenQvOUNKbzVsWkU2NnI1QTk5T0RWcUdDcFRqYUtnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4NzM2OTE0ODAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTkwMjM3MzcyNVwifSIKfQ== // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
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
