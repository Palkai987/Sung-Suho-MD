const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "7V1SzRQB#W5-sxiAau-7nB3rIxHolKJdcLIl_ihCbsmKJ4Sk5PNE",
  OWNER_NUM: process.env.OWNER_NUM || "94750437049",
  OWNER_NAME: process.env.OWNER_NAME || "imesh",
  REPO: process.env.REPO || "https://github.com/NaCkS-ai/Sung-Suho-MD", 
  PREFIX: process.env.PREFIX || ".",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
  MODE : process.env.MODE || "public", 
  AUTO_STATUS_LIKE: process.env.AUTO_STATUS_LIKE || "true", 
  AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING || "false"), 
  ANTI_DELETE: convertToBool(process.env.ANTI_DELETE || "true"),
  version: process.env.version || "V2",
};

