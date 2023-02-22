function move(name){
  var elem = document.querySelector(name);   
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function moveSub(name,n){
    var elem = document.querySelector(name);  
    var elem1 = document.querySelector(".section.gr"); 
    var temp =elem.style.width;
    var temp=temp.split("px");
    var initial_width=parseInt(temp[0]);
    // var h=document.createElement("h1");
    // h.textContent=initial_width;
    // elem1.appendChild(h);
    var final_width=initial_width+ 300/n;
    var id = setInterval(frame, 10);
    function frame() {
      if (initial_width >= final_width) {
        clearInterval(id);
      } else {
        initial_width++; 
        elem.style.width = initial_width + "px"; 
        elem.innerHTML = Math.trunc((initial_width/300)*100 ) + '%';
      }
    }
  }