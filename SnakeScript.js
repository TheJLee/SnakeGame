/* Where the main functionality will be implemented */
var drawModule = (function(){
  /*Color body of the snake*/
  var colorSnakeBody = function(x,y){
    /* Color the body of the snake black with blue borders */
    ctx.fillStyle = 'black';
    /* fillRect(xLocation,yLocation,widthOfBox,heightOfBox)*/
    ctx.fillRect(x*snakeSize, y*snakeSize,snakeSize,snakeSize);

  }

  /*Clear canvas*/

  /*Discolor the old location to the canvas background color*/
  var removeSnakeBodyColor = function(x,y){
    ctx.clearRect(x*snakeSize, y*snakeSize,snakeSize,snakeSize);
  }

  /*Color in the food*/

  /*Keep Score of the snake*/

  /*Init array of snake*/
  var createSnakeArray = function(){
    /*Length of snake should be 5*/
    var length = 1;
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

  /*Create a function to check collisions on itself */

  /*Add a direction function*/
  var setDirection = function()
  {
    document.onkeydown = function(event){
        if(event.keyCode == 39 && direction != "Left")
        {
         direction = "Right";
        }
        if(event.keyCode == 37 && direction != "Right")
        {
          direction = "Left";
        }
        if(event.keyCode == 38 && direction != "Down")
        {
          direction = "Up";
        }
        if(event.keyCode == 40 && direction != "Up")
        {
          direction = "Down";
        }
      };
  }
  /*The run function */
  var run =  function(){
    var sx = snake[0].x;
    var sy = snake[0].y;
    removeSnakeBodyColor(sx,sy)
    setDirection();

    if(direction=="Left" )
    {
      sx--;
    }
    if(direction=="Right" )
    {
      sx++;
    }
    if(direction=="Down")
    {
      sy++;
    }
    if(direction =="Up")
    {
      sy--;
    }
    colorSnakeBody(sx,sy);
    var newTail = {x: sx, y:sy};
    snake.unshift(newTail);

  }
  /*An init function that runs thing together and keeps a game loop*/
  var init = function(){
    createSnakeArray(); //rememeber to change back to 5
    gameloop = setInterval(run, 80); //Loops the game
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
