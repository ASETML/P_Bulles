import { initSnake, moveSnake, drawSnake, isFoodEaten } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange, handlePause } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";
import { box, gameSpeed } from "./config.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let shouldGrow; //Si le serpent doit grandir au prochain tick
let pause = false;

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

document.addEventListener("keydown", (pauseEvent) => {
  let newState = handlePause(pauseEvent, pause);
  if (newState != undefined) {
    pause = newState;
  }
});

function startGame() {
  snake = initSnake(box, canvas);
  food = generateFood(box, canvas, snake);

  gameInterval = setInterval(gameTick, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

function gameTick() {
  if (!pause) {
    if (isFoodEaten(snake, food)) {
      shouldGrow = true
      food = generateFood(box, canvas, snake);
      score++;
    }
    else {
      shouldGrow = false;
    }
    
    moveSnake(snake, direction, box, shouldGrow);
    isFoodEaten(snake, food);
    
    if (checkWallCollision(snake.at(0), canvas) || checkCollision(snake)) {
      restartGame();
    }
  }
  draw();
}

function restartGame() {
  //Vide les valeurs pour préparer la nouvelle partie
  snake = null;
  food = null;
  direction = "RIGHT";
  score = 0;
  clearInterval(gameInterval);
  shouldGrow = null;

  startGame();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFood(ctx, food, box);
  drawSnake(ctx, snake, box);
  drawScore(ctx, score);

  if (pause) {
    ctx.font = "52px Arial";
    ctx.fillStyle = "black"
    //TODO : centrer le texte
    ctx.fillText("PAUSE", canvas.width / 2, canvas.height / 2);
  }
}

startGame();
