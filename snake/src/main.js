import { initSnake, moveSnake, drawSnake, isFoodEaten } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange, handlePause } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";
import { box, gameSpeed, textColor } from "./config.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake; //Le serpent
let food; //La nouriture
let direction = "RIGHT"; //La direction du serpent
let score = 0; //Le score du joueur
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let shouldGrow; //Si le serpent doit grandir au prochain tick
let pause = false; //Si le jeu est en pause. TODO: remplacer par une enum

//Pour le déplacement du serpent
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

//Pour la pause
document.addEventListener("keydown", (pauseEvent) => {
  pause = handlePause(pauseEvent, pause); //On met à jour l'état du jeu
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
 * Redessine de toute façon le jeu.
 */
function gameTick() {
  //Si le jeu n'est pas en pause
  if (!pause) {
    if (isFoodEaten(snake, food)) {
      shouldGrow = true //Le serpent va grandir
      food = generateFood(box, canvas, snake); //On génère une nouvelle nourriture
      score++;
    }
    else {
      shouldGrow = false; //Le serpent ne va pas grandir
    }
    
    moveSnake(snake, direction, box, shouldGrow); //On déplace le serpent
    
    //On vérifie que le joueur ne doit pas mourir
    if (checkWallCollision(snake.at(0), canvas) || checkCollision(snake)) {
      restartGame(); //TODO: Afficher l'écran des scores
    }
  }
  draw();
}

/**
 * Recommence une partie.
 * 
 * Cette fonction réinitialise les variables et surtout l'intervalle.
 * Elle appelle ensuite startGame et relance le jeu.
 */
function restartGame() {
  //Vide les valeurs pour préparer la nouvelle partie
  snake = null;
  food = null;
  direction = "RIGHT";
  score = 0;
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

  //Affichage de l'indicateur de pause
  if (pause) {
    //Style du texte
    ctx.font = "52px Arial";
    ctx.fillStyle = textColor;

    ctx.textBaseline = "middle"; //Centre le texte verticalement
    ctx.textAlign = "center"; //Centre le texte horizontalement
    ctx.fillText("PAUSE", canvas.width / 2, canvas.height / 2);
  }
}

startGame(); //Démarre le jeu
