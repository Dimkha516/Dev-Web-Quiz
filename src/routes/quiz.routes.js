const express = require('express');
const router = express.Router();
const quizController = require("../controllers/quiz.controller");

// Obtenir une question (indice aléatoire)
router.get("/question", quizController.getQuestion);

// Vérifier la réponse:
router.post("/answer", quizController.checkAnswer);


module.exports = router;