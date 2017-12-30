let Game = function(rows, columns) {
  this.rows = rows;
  this.columns = columns;
  this.snake = undefined;
};

Game.prototype.updateSnake = function() {
  this.snake=createSnake();
};

Game.prototype.hasSnakeHitBoundry=function () {
  let topLeftPos=new Position(0,0,null);
  let bottomRightPos=new Position(this.rows,this.columns,null);
  return this.snake.withinRange(topLeftPos,bottomRightPos);
};

Game.prototype.buildGame=function () {
  this.updateSnake();
  drawGrids(numberOfRows, numberOfCols);
  drawSnake(snake);
  createFood(numberOfRows, numberOfCols);
  drawFood(food);
  addKeyListener();
};
