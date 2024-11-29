import { initSnake, moveSnake, drawSnake, isFoodEaten } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let shouldGrow; //Si le serpent doit grandir au prochain tick

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  snake = initSnake(box, canvas);
  food = generateFood(box, canvas);

  gameInterval = setInterval(gameTick, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

function gameTick() {
  if (isFoodEaten(snake, food)) {
    shouldGrow = true
    food = generateFood(box, canvas);
    score++;
  }
  else {
    shouldGrow = false;
  }
  
  moveSnake(snake, direction, box, shouldGrow);
  isFoodEaten(snake, food);
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFood(ctx, food, box);
  drawSnake(ctx, snake, box);
  drawScore(ctx, score);
}

startGame();
