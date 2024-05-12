const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mainRoute = require("./routes/index");
const { JWT_SECRET } = require("./config");
const { pool } = require("./db");

const app = express();
const PORT = 3000;
app.use(cors());
app.use("/api/v1", mainRoute);

// app.use() use to run middlewares or to route the request to ceratin substring
// Bootstrap application that all request from api/v1 go to mainRoute

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const authToken = req.headers.authorization;
  console.log(authToken);

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.json({ message: "Failed" });
  }

  const token = authToken.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // req.userId = decoded.userId;

    console.log(decoded);

    pool.query(
      "select * from users where enrollment_number = $1",
      [decoded.enrollment],
      (err, data) => {
        if (err) {
          console.log("Error in Authentication");
          return res.status(404).json({ message: err });
        }

        return res.json({
          message: "Success",
          info: {
            data: data.rows[0],
            userId: decoded.userId,
          },
        });
      }
    );
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Failed",
    });
  }
});

app.listen(PORT, () => {
  console.log("Listening to PORT", PORT);
});
