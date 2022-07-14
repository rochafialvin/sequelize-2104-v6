require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { User, Address } = require("./models");

app.get("/users", async (req, res, next) => {
  try {
    const response = await User.findAll({
      include: {
        model: Address,
        as: "addresses",
      },
    });
    // const users = JSON.parse(JSON.stringify(response));
    res.send({
      status: "Success",
      message: "User list",
      data: {
        result: response,
      },
    });
  } catch (error) {
    next(error);
  }
});

// calling home
app.get("/", (req, res) => {
  res.send("API JALAN MZ 🚀");
});

// error handler
app.use((error, req, res, next) => {
  console.log({ error });

  const errorObj = {
    status: "Error",
    message: error.message,
    detail: error,
  };

  const httpCode = typeof error.code == "number" ? error.code : 500;
  res.status(httpCode).send(errorObj);
});

//  running api
app.listen(port, (error) => {
  if (error) return console.log({ err: error.message });
  console.log(`API berhasil running di port ${port}`);
});
