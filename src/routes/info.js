const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
    let id = req.params.id;
    
    const list = [
      "https://es.infobyip.com/ip-" + id + ".html",
      "https://invader-zim.herokuapp.com/paginas/777",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=POD6w9G750Y",
      "https://www.youtube.com/watch?v=56mjWbFU7aY"
    ];
  
    const random = Math.floor(Math.random() * list.length);
  
    const random_url = list[random];
  
    res.redirect(random_url);
  });

    module.exports = router;