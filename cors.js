const cors = require("cors");

const corsMiddleware = cors({
  origin: "http://localhost:3000", // aquí va el puerto de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
});

module.exports = corsMiddleware;
