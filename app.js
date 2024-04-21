// imports
const express = require("express");
require("dotenv").config();

const connect = require("./src/db/connect");
const notFound = require("./src/middlewares/notFound");
const errorHandler = require("./src/middlewares/errorHandler");
const employeesRouter = require("./src/routes/employees");

const app = express();

// built in middlewares
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).status(200).json({ msg: "Hello World!" });
});

// routes
app.use("/api/v1/employees", employeesRouter);

// custom middlewares
app.use(notFound);
app.use(errorHandler);

// connection to DB and start server
connect()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB: ", error));
