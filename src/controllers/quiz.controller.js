const quizService = require("../services/quiz.service");

function getQuestion(req, res) {
  const question = quizService.getRandomQuestion();
  res.json(question);
}

function checkAnswer(req, res) {
  const { id, reponse } = req.body;

  if (!id || !reponse) {
    return res.status(400).json({
      error: "Veuillez fournir id et réponse",
    });
  }

  const result = quizService.checkAnswer(id, reponse);
  if (result.error) {
    return res.status(400).json(result);
  }
  res.json(result);
}

module.exports = { getQuestion, checkAnswer };
