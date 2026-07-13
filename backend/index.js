const express = require('express')

const app = express();

const PORT =3000;

  app.get("/", (req, res) => {
  res.send("Welcome to Todo Backend 🚀");
});



app.listen(PORT,()=>{
    console.log("server running successfully");
})