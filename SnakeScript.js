/* Where the main functionality will be implemented */
var drawModule = (function(){
  /*Color body of the snake*/
  var colorSnakeBody = function(x,y){
    /* Color the body of the snake black with blue borders */
    ctx.fillStyle = 'black';
    /* fillRect(xLocation,yLocation,widthOfBox,heightOfBox)*/
    ctx.fillRect(x*snakeSize, y*snakeSize,snakeSize,snakeSize);
    ctx.strokeStyle = 'blue';
    ctx.strokeRect(x*snakeSize, y*snakeSize,snakeSize,snakeSize);
  }
  /*Color in the food*/

  /*Keep Score of the snake*/

  /*Init array of snake*/

  /*Create a function that creates the food position*/

  /* Create a function to check collisions on itself */

  /*The run function */

  /*An init function that runs thing together and keeps a game loop*/
  var init = function(){
    colorSnakeBody(1,1);
    console.log("Im running");
  }

  return{
    init : init
  };
}());
