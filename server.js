const express = require("express");

const app = express();
app.use(express.json());

app.post("/receiveData", (req, res) =>{
    console.log("Données reçues :",
req.body);
    res.status(200).send("Donnée reçue !"); 
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Serveur en écoute sur le port ${PORT}`)
);




