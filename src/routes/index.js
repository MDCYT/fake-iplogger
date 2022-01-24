// This is the "/" route.
const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    let ip = req.headers["x-forwarded-for"] || (req.connection.remoteAddress).split(":")[3] || "localhost";
    let key = process.env.KEY;
    const links = [
      "fakepage.com",
      "leakdata.com",
      "fakedata.org",
      "fakepage.net",
      "fakepage.org",
      "powned.com",
      "alldata.com",
      "hackedpeople.com",
      "fakepage.net"
    ];
    const random = Math.floor(Math.random() * links.length);
    let link = links[random];
  
    function base64 (text) {
      return Buffer.from(text).toString("base64");
    }
  
    text = base64(link);
  
    let zalgo
    // Make the normal text a zalgo text
    function zalgoText(text) {
      let zalgonpm = require("zalgolize");
      zalgo = zalgonpm(text, 1, [2, 2, 2]);
      return zalgo;
    }
  
    zalgoText(text);
    console.log("New request from: " + ip);
    res.render("index", {
      ip: ip,
      zalgo: zalgo,
      key: key
    });
  });

module.exports = router;
