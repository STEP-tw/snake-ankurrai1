let numberOfRows = 60;
let numberOfCols = 120;
let game = {};

let animator = undefined;

const animateSnake = function() {
  let oldHead = snake.getHead();
  if (isGameOver(snake)) {
    clearInterval(animator);
    overGame();
    return;
  }
  let oldTail = snake.move();
  let head = snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if (head.isSameCoordAs(food)) {
    snake.grow();
    createFood(numberOfRows, numberOfCols);
    drawFood(food);
  }
}

const changeSnakeDirection = function(event) {
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();
      break;
    case "KeyD":
      snake.turnRight();
      break;
    case "KeyC":
      snake.grow();
      break;
    default:
  }
}

const isGameOver = function() {
  return snake.isColliedItSelf() || game.hasSnakeHitBoundry();
}

// const isColliedWithSideWall = function() {
//   return snake.isColliedWithEastWall() || snake.isColliedWithWestWall()
// }
//
// const isTopBottomWallCollision = function() {
//   return snake.isColliedWithNorthWall() || snake.isColliedWithSouthWall()
// }
//
// const isColliedWithWall = function() {
//   return isColliedWithSideWall() || isTopBottomWallCollision();
// }
//
const addKeyListener = function() {
  let grid = document.getElementById("keys");
  grid.onkeyup = changeSnakeDirection;
  grid.focus();
}

const stopGame = function() {
  clearInterval(animator);
  document.getElementById("display").innerText = "Game over";
};

const createSnake = function() {
  let tail = new Position(12, 10, "east");
  let body = [];
  body.push(tail);
  body.push(tail.next());
  let head = tail.next().next();
  snake = new Snake(head, body);
  return snake;
}

const createFood = function(numberOfRows, numberOfCols) {
  food = generateRandomPosition(numberOfCols, numberOfRows);
}

const restart = function() {
  location.reload();
}

const startGame = function() {
  game = new Game(numberOfRows, numberOfCols);
  game.buildGame();
  animator = setInterval(animateSnake, 240);
}


window.onload = startGame;
