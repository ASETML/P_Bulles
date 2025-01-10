import { textColor, textFont, textSize } from "./config.js";

/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
export function drawScore(ctx, score) {
  ctx.font = textSize + " " + textFont;
  ctx.fillStyle = textColor;
  ctx.fillText(score, 5, 20);
}

/**
 * Cette fonction récupère la liste des meilleurs scores.
 * @returns La liste de scores
 */
export function fetchScores() {
  //TODO: Implémenter la récupération des scores avec jsonbin.io
  return [{score: 42, time: 42}, {score: 23, time: 2342}, {score: 43, time: 34}, {score: 42, time: 41}, {score: 23, time: 2340}]; //Temp
}

/**
 * Ajoute si nécessaire le score à la liste des meilleurs scores
 * @param {*} scoreList - La liste des scores
 * @param {*} newScore - Le score à ajouter
 * @param {*} newTime - Le temps à ajouter
 * @returns La liste de scores
 */
export function addScore(scoreList, newScore, newTime) {
  scoreList.push({score: newScore, time: newTime}); //On ajoute le nouveau score à la liste de score
  scoreList.sort((a, b) => a.time - b.time); //Trie les scores en fonction du temps
  scoreList.sort((a, b) => b.score - a.score); //Trie les scores en fontion du score
  scoreList.pop(); //Enlève le dernier élèment de la liste de scores
  return scoreList;
}

/**
 * Sauvegarde la liste des meilleurs scores
 */
export function saveScores(scoreList) {
  //TODO: Implémenter la sauvegarde des scores avec jsonbin.io
}