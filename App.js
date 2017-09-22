/* Where I'll run the program */
(function(window, document, drawModule){
  var btn = document.getElementById('btn');
  btn.addEventListener("click",function(){drawModule.init();});
  })(window,document,drawModule);
