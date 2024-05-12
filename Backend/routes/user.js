// All routes for api/v1/user/...
//  user/signin
//  user/login
//  user/profile

const express = require("express");
const zod = require("zod");
const { pool } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { authMiddleware } = require("../authMiddleware");

// Why create a Router because we know every request will start from /api/v1/users
// OR /api/v1/user that why create a route
const router = express.Router();
router.use(bodyParser.json());

function DataHelper(enroll) {
  return new Promise((resolve, reject) => {
    pool.query(
      "select * from student where enrollmentnumber = $1",
      [enroll],
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.rows[0]);
        }
      }
    );
  });
}

//routes for signin

router.post("/login", async (req, res) => {
  try {
    const enrollment = req.body.enrollment;
    const password = req.body.password;

    const data = await pool.query(
      "select * from users where enrollment_number=$1",
      [enrollment]
    );

    if (data.rows.length == 0) {
      console.log("Query Error in LoginIn");
      console.log(error);
      return res.status(500).json({ message: "Wrong Inputs" });
    }

    const rows = data.rows;

    if (password == rows[0].password) {
      const token = jwt.sign(
        {
          enrollment: enrollment,
        },
        JWT_SECRET
      );

      return res.json({
        message: "Success",
        token: token,
        info: {
          rows,
        },
      });
    } else {
      return res.json({
        message: "Failed",
      });
    }
  } catch (error) {
    console.log("Error in Login Function");
    console.log(error);
  }
});

router.post("/signup", async (req, res) => {
  const body = req.body;

  try {
    const data = pool.query(
      "INSERT INTO users (first_name, last_name, password, enrollment_number, mobile_number) VALUES ($1, $2, $3, $4 ,$5)",
      [
        body.firstName,
        body.lastName,
        body.password,
        body.enrollment,
        body.mobileNumber,
      ]
    );

    if (data.rows.length == 0) {
      return res.status(500).json({
        message: "Already Exists",
      });
    } else {
      const token = jwt.sign(
        {
          enrollment: body.enrollment,
        },
        JWT_SECRET
      );

      return res.json({
        message: "Success",
        token: token,
        data: {
          body,
        },
      });
    }
  } catch (error) {
    if (error) {
      return res.json({
        message: "Error in SignIn Page",
      });
    }
  }
});

router.post("/dashboard/info", async (req, res) => {
  const token = req.body.token;

  const decoded = jwt.verify(token, JWT_SECRET);

  try {
    const dataset = await DataHelper(decoded.enrollment);
    let ClassName;

    const data = await pool.query(
      "SELECT ClassName FROM class WHERE classID = $1",
      [dataset.classid]
    );

    // Check if the query returned any rows
    if (data.rows.length === 0) {
      throw new Error("Class not found");
    }

    const className = data.rows[0];

    return res.status(200).json({ className: className, data: dataset });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ error: "Failed to fetch data" });
  }
});

router.post("/dashboard/subjects", async (req, res) => {
  const token = req.body.token;

  const decoded = jwt.verify(token, JWT_SECRET);

  try {
    const data = await DataHelper(decoded.enrollment);

    const subjects = await pool.query(
      `SELECT t.TeacherName, s.SubjectID, s.SubjectName 
      FROM Subjects s 
      JOIN Class_Subject_Mapping csm ON s.SubjectID = csm.SubjectID 
      JOIN Teacher t ON csm.ClassSubjectID = t.ClassSubjectID
      WHERE csm.ClassID = $1`,
      [data.classid]
    );

    if (subjects.rows.length === 0) {
      throw new Error("Subjects not found");
    }

    const AllSubjects = subjects.rows;

    return res.status(200).send(AllSubjects);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
