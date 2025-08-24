const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const quizRoutes = require("./src/routes/quiz.routes");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware:
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // Pour les corps JSON
app.use(bodyParser.urlencoded({ extended: false })); // Pour les corps URL-encodés

// Routes:
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Dev-Web-Quiz");
});

app.use("/api", quizRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

// INSTALL BODY-PARSER IN CASE OF SOME ERRORS
