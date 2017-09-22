/*
********************************************************************************
So what I need to do is:
  Makes a Snake
    Make this an array with each element containg the location of a block
      If it grows pop off the end and add to the head with the unshift()
      funciton.
  Make Food
    Needs to be random
  Collision
    Check to see if head of the snake touches the canvas or itself
  Grow
    Touches on the food
      If food.location = head.location then grow() snake
  Controls
    Pause
    Start is used with button
    Arrow keys {Up, Down, Left, Right}
********************************************************************************
*/

/* Global Variables */

var mycanvas = document.getElementById('canvas');
var ctx = mycanvas.getContext('2d');
var snake, food,prevDirection ,direction,snakeSize=10 ,score=0,
    cWidth = 350, cHeight = 350;
