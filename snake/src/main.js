import { initSnake, moveSnake, drawSnake, isFoodEaten } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange, handlePause } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { addScore, drawScore, fetchScores, saveScores } from "./score.js";
import { box, gameSpeed, textColor, GameStates, textFont, textSize, titleSize, biggerTextSize, topMargin } from "./config.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake; //Le serpent
let food; //La nouriture
let direction = "RIGHT"; //La direction du serpent
let score = 0; //Le score du joueur
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let shouldGrow; //Si le serpent doit grandir au prochain tick
let gameState = GameStates.Play; //Si le jeu est en pause.
let gameDuration = 0; //La durée de la partie
let bestScore //Tableau qui stocke les 5 meilleurs scores

//Pour le déplacement du serpent
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

//Pour la pause
document.addEventListener("keydown", (pauseEvent) => {
  gameState = handlePause(pauseEvent, gameState); //On met à jour l'état du jeu
});

//Redémarre le jeu quand on clique sur le bouton pour rejouer
replayButton.addEventListener("click", () => {
  restartGame();
});

/**
 * Démarre le jeu.
 * 
 * Cette fonction initialise le serpent et génère une première nouriture. Elle démarre l'intervalle de jeu.
 */
function startGame() {
  snake = initSnake(box, canvas); //On initialise le serpent
  food = generateFood(box, canvas, snake); //On initialise la première nouriture

  gameInterval = setInterval(gameTick, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

/**
 * Fonction principale du jeu. Appelée par gameInterval.
 * 
 * Cette fonction est la fonction appelée à chaque tick du jeu.
 * Si le jeu n'est pas en pause et qu'on mange une nouriture, on doit grandir, on incremente le score et on génère une nouvelle nouriture.
 * Si le jeu n'est pas en pause, on déplace le serpent.
 * Si le jeu n'est pas en pause et qu'on touche un mur ou sa queue, le jeu redémarre.
 * Ne redessine pas de le jeu quand il est en pause, car rien n'a changé.
 * On affiche l'indicateur de pause
 */
function gameTick() {
  //Si le jeu n'est pas en pause
  if (gameState === GameStates.Play) {
    //Augmenter la durée de la partie
    gameDuration += gameSpeed;

    if (isFoodEaten(snake, food)) {
      shouldGrow = true //Le serpent va grandir
      food = generateFood(box, canvas, snake); //On génère une nouvelle nourriture
      score++;
    }
    else {
      shouldGrow = false; //Le serpent ne va pas grandir
    }
    
    moveSnake(snake, direction, box, shouldGrow); //On déplace le serpent
    
    //On vérifie si le joueur est mort
    if (checkWallCollision(snake.at(0), canvas) || checkCollision(snake)) {
      gameState = GameStates.GameOver;
      clearInterval(gameInterval);
    }
  }

  if (gameState === GameStates.Play) {
    draw();
  }
  else if (gameState === GameStates.Pause) {
    drawPause();
  }
  else if (gameState === GameStates.GameOver) {
    drawGameOver();
  }
}

/**
 * Recommence une partie.
 * 
 * Cette fonction réinitialise les variables et surtout l'intervalle.
 * Elle appelle ensuite startGame et relance le jeu.
 */
function restartGame() {
  //Cache le bouton pour rejouer
  replayButton.style.display = "none"; 
  //Vide les valeurs pour préparer la nouvelle partie
  ctx.clearRect(0, 0, canvas.width, canvas.height); //Efface le canevas
  snake = null;
  food = null;
  direction = "RIGHT";
  score = 0;
  gameState = GameStates.Play;
  clearInterval(gameInterval);
  shouldGrow = null;

  startGame(); //Redémarre le jeu
}

/**
 * Affiche tout le jeu.
 * 
 * Cette fonction affiche les différents éléments du jeu : la nouriture, le serpent, le score et l'indicateur de pause
 */
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //Efface le canevas
  drawFood(ctx, food, box); //Affiche la nouriture
  drawSnake(ctx, snake, box); //Affiche le serpent
  drawScore(ctx, score); //Affiche le score
  drawTimer(); //Affiche le temps
}

function drawTimer() {
  //Style du texte
  ctx.font = textSize + " " + textFont;
  ctx.textBaseline = "bottom"; //Alignement vertical du texte
  ctx.textAlign = "right"; //Alignement horizontal du texte

  ctx.fillText(Math.round(gameDuration / 1000) + "s", canvas.width, topMargin); //Affiche le temps TODO: mieux aligner le texte, fonction à part
}

/**
 * Cette fonction affiche l'indicateur de pause
 */
function drawPause() {
  //Style du texte
  ctx.font = titleSize + " " + textFont;
  ctx.fillStyle = textColor;
  ctx.textBaseline = "middle"; //Centre le texte verticalement
  ctx.textAlign = "center"; //Centre le texte horizontalement

  ctx.fillText("PAUSE", canvas.width / 2, canvas.height / 2);
}

/**
 * Affiche l'écran des scores
 */
function drawGameOver() {
  //Affiche le bouton pour rejouer
  replayButton.style.display = "block"; 

  //La marge entre les éléments
  let marginY = 60;
  //Gestion des scores
  bestScore = fetchScores(); //Récupèration des meilleurs scores
  bestScore = addScore(bestScore, score, gameDuration / 1000); //Ajout du score si nécessaire
  saveScores(bestScore); //Sauvegarde des scores

  //Efface le caneva
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //Style du texte
  ctx.font = titleSize + " " + textFont; //Titre h1
  ctx.fillStyle = textColor;

  ctx.textBaseline = "bottom"; //Centre le texte verticalement
  ctx.textAlign = "center"; //Centre le texte horizontalement
  ctx.fillText("Game Over !", canvas.width / 2, marginY);
  marginY += 35

  //Notre résultat
  ctx.font = biggerTextSize + " " + textFont; //Titre h2
  ctx.fillText("Ton score: " + score, canvas.width / 2, marginY);
  marginY += 35

  ctx.fillText("Ton temps: " + Math.round(gameDuration / 1000) + "s", canvas.width / 2, marginY);
  marginY += 35

  //Les meilleurs scores
  ctx.font = textSize + " " + textFont; //Texte standard
  ctx.fillText("Meilleurs score :", canvas.width / 2, marginY);
  marginY += 35

  let index = 1
  for (let scoreItem of bestScore) {
    ctx.fillText(`${index}. ${scoreItem.score} points en ${scoreItem.time}s`, canvas.width / 2, marginY);
    marginY += 35
    index++;
  }
}

startGame(); //Démarre le jeu