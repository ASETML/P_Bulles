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
 * Cette fonction récupère la liste des meilleurs scores
 */
export function fetchScores() {
  return [{score: 42, time: 42}, {score: 23, time: 2342}, {score: 43, time: 34}, {score: 42, time: 42}, {score: 23, time: 2342}];
}

/**
 * Ajoute si nécessaire le score à la liste des meilleurs scores
 */
export function addScore(scoreList, newScore, newTime) {
  debugger
  scoreList.push({score: newScore, time: newTime});
}

/**
 * Sauvegarde la liste des meilleurs scores
 */
export function saveScores(scoreList) {

}