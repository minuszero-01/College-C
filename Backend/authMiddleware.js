const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Authorization Failed" });
  }

  const token = authToken.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);

    if (req.body.enrollment == decoded.enrollment) {
      next();
    } else {
      return res.status(500).json({ message: "Wrong Auth Token" });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Authorization Failed",
    });
  }
};

module.exports = {
  authMiddleware,
};
