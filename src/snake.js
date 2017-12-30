const eastWallPositionOnX = 119;
const westWallPositionOnX = 0;
const northWallPositionOnY = 0;
const southWallPositionOnY = 59;

const Snake = function(head, body) {
  this.head = head;
  this.body = body;
}

Snake.prototype = {
  getBody: function() {
    return this.body;
  },
  getHead: function() {
    return this.head;
  },
  move: function() {
    this.body.push(this.head);
    this.head = this.head.next();
    return this.body.shift();
  },
  isColliedItSelf: function() {
    let snakeHead = this.head;
    return this.body.some((bodyPart)=>snakeHead.isSameCoordAs(bodyPart));
  },
  grow: function() {
    this.body.unshift(new Position(Infinity, Infinity, this.direction));
  },
  turnLeft: function() {
    this.head = this.head.turnLeft();
  },
  turnRight: function() {
    this.head = this.head.turnRight();
  },
  iswithinRange: function(topLeftPos, bottomRightPos) {
  return topLeftPos.isSameCoordAs(this.head)||bottomRightPos.isSameCoordAs(this.head);
  }
}
