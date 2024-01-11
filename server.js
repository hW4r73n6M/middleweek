require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(express.json());
const { ConectionDb } = require("./DB/connection");
app.use(
  cors({
    origin: "*",
  })
);
/* DB CONECTION */
ConectionDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } else {
    console.log(`Conection error: ${err}`);
  }
});

/* ROUTES */
app.use("/", require("./routes"));
