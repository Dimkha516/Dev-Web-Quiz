const fs = require("fs");
const path = require("path");

// Charger le fichier JSON une seule fois:
const dataPath = path.join(__dirname, "../data/apprenants.json");
if (!dataPath) {
  return { error: "Chemin de fichier introuvable" };
}

const apprenants = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
if (!apprenants) {
  return { error: "Fichier Json introuvable" };
}

function getRandomQuestion() {
  // Choisir un apprenant au hasard
  const apprenant = apprenants[Math.floor(Math.random() * apprenants.length)];

  // Choisir un indice parmi ceux de l'apprenant.
  const indice =
    apprenant.indices[Math.floor(Math.random() * apprenant.indices.length)];

  return {
    id: apprenant.id,
    indice,
  };
}

function checkAnswer(id, reponse) {
  const apprenant = apprenants.find((a) => a.id === id);
  if (!apprenant) {
    return { error: "Apprenant introuvable" };
  }

  if (!reponse || typeof reponse !== "string") {
    return { error: "Réponse invalide" };
  }

  // Vérification stricte (nom complet)
  const isCorrect =
    apprenant.nom.toLowerCase().trim() === reponse.toLowerCase().trim();

  if (isCorrect) {
    return {
      correct: true,
      apprenant: {
        nom: apprenant.nom,
        photo: apprenant.photo,
      },
    };
  } else {
    return {
      correct: false,
      message: "Mauvaise réponse, réessaie !",
    };
  }
}

module.exports = { getRandomQuestion, checkAnswer };
