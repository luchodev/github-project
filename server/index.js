import express from "express";
import path from "path";

import config from "./config";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
   let indexFile = path.join(__dirname, "../index.html");
   res.sendFile(indexFile);
});

app.listen(config.port, (err) => {
   if (err) console.log(`There was an error = ${err}`);
   console.log(`Application running on port ${config.port}`);
});
