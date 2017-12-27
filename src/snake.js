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
    return this.body.some(function(bodyPart) {
      return bodyPart.x == snakeHead.x && bodyPart.y == snakeHead.y;
    });
  },

  isColliedWithEastWall: function() {
    return this.head.x == eastWallPositionOnX && this.head.direction == "east";
  },

  isColliedWithWestWall: function() {
    return this.head.x == westWallPositionOnX && this.head.direction == "west";
  },

  isColliedWithNorthWall: function() {
    return this.head.y == northWallPositionOnY && this.head.direction == "north"
  },

  isColliedWithSouthWall: function() {
    return this.head.y == southWallPositionOnY && this.head.direction == "south"
  },

  grow: function() {
    this.body.unshift(new Position(Infinity, Infinity, this.direction));
  },
  turnLeft: function() {
    this.head = this.head.turnLeft();
  },
  turnRight: function() {
    this.head = this.head.turnRight();
  }
}
