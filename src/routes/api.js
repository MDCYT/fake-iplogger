// This is the "/api" route.
const express = require("express");
const router = express.Router();


router.get("/whoami", (req, res) => {
    let ip = req.headers["x-forwarded-for"];
    let language = req.headers["accept-language"];
    language = language.split(",")[0];
    let software = req.headers["user-agent"];
    if (software.includes("curl")) {
      software = "(" + software + ")";
    }
    if (software.includes("Wget")) {
      // Muestrame el string sin los parentesis
      software = software.substring(software.indexOf("Wget") + 0, software.length);
      software = "(" + software + ")";
    }
    let softwareInfo = software.split("(") || "";
    software = softwareInfo[1].split(")")[0] || "";
    let device
    let architecture
    if (software.includes("Android")) {
      software = "Android" + software.split("Android")[1];
      device = software.split(";")[1] || 'Mobile'
      // If have spaces in the start of the device name, remove it and show the rest of the device name
      if (device.charAt(0) === ' ') {
        device = device.substring(1);
      }
      software = software.split(";")[0];
    }else
    if (software.includes("Windows")) {
      software = "Windows" + software.split("Windows")[1];
      architecture = software.split(";")[1] || 'Desktop'
      // If have spaces in the start of the device name, remove it and show the rest of the device name
      if (architecture.charAt(0) === ' ') {
        architecture = architecture.substring(1);
        if (architecture.includes("rv")) {
          architecture = undefined
        }
      }
      software = software.split(";")[0];
    }else 
    if (software.includes("Macintosh")) {
      software = "Macintosh" + software.split("Macintosh")[1];
      device = software.split(";")[1] || 'Macintosh'
      // If have spaces in the start of the device name, remove it and show the rest of the device name
      if (device.charAt(0) === ' ') {
        device = device.substring(1);
      }
      software = software.split(";")[0];
    } else
    if(software.includes("PlayStation")){
      device = "PlayStation " + software.split(" ")[1];
      software = software.split(" ")[2];
    }else
    if(software.includes("curl")){
      device = "curl"
      software = software.split("/")[1]
    }else
    if(software.includes("Wget")){
      device = "Wget"
      software = software.split("/")[1]
    }
    else {
      device = software.split(";")[1] || undefined
      software = software.split(";")[0] || 'Desktop'
      if (device.charAt(0) === ' ') {
        device = device.substring(1);
      }
    }
  
    res.json({
      ipaddress: ip,
      language: language,
      software: software,
      device: device,
      architecture: architecture
    });
  });

  module.exports = router;