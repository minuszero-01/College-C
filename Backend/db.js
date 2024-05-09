const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "CollegeCompass",
  password: "hande",
  port: 5432,
});

// Function to check the connection
const checkDatabaseConnection = async () => {
  try {
    await pool.connect();
    console.log("Connection to database established successfully.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

checkDatabaseConnection();

module.exports = { pool };
