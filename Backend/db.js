const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "CollegeCompass",
  password: "hande",
  port: 5432,
});

// Function to check the connection
const checkDatabaseConnection = async () => {
  try {
    await client.connect();
    console.log("Connection to database established successfully.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  } finally {
    await client.end();
    console.log("Closed");
  }
};

checkDatabaseConnection();

module.exports = { client };
