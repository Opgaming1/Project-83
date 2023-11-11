 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
 color="aqua";
 mouseevent="";
 last_x_position="";
 last_y_position="";
 
 window.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e){
    mouseevent="mousedown";
 }

 window.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
    mouseevent="mouseup";
 }
 
 window.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
    mouseevent="mouseleave";
 }

 window.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
    current_x_position=e.clientX - canvas.offsetLeft;
    current_y_position=e.clientY - canvas.offsetTop;
    if(mouseevent =="mousedown"){
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=2;
         ctx.moveTo(last_x_position,last_y_position);
         ctx.lineTo(current_x_position,current_y_position);
         ctx.stroke();
    }
    last_x_position=current_x_position;
    last_y_position=current_y_position;
 }
 var new_width=screen.width -70;
var new_height=screen.height-300;
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

if(screen.width<992){
   canvas.width=new_width;
   canvas.height=new_height;
   document.body.style.overflow = "hidden";
}

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
      last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
      last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
        
    }

    
    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

