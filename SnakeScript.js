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
  var createSnakeArray = function(){
    /*Length of snake should be 5*/
    var length = 5;
    /*Snake[0] should have the head of the snake so that when you pop it removes
      the tail (last part of the snake) and when you add onto the array with
      unshift, the new element at snake[0] will have the head*/
      snake = [];
      for(var i = (length -1); i>=0; i--)
      {
        snake.push({x:i,y:0});
      }
  }
  /*Create a function that creates the food position*/

  /* Create a function to check collisions on itself */

  /*The run function */

  /*An init function that runs thing together and keeps a game loop*/
  var init = function(){
    //colorSnakeBody(0,0);
    createSnakeArray();
    // for(var i = 0; i<snake.length;i++)
    // {
    //   console.log(snake[i].x + " " + snake[i].y);
    //   colorSnakeBody(snake[i].x,snake[i].y);
    // }
  }

  return{
    init : init
  };
}());
