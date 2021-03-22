var imageBoxes = document.getElementsByClassName("box");
var imageTitles = document.getElementsByClassName("image-title");
var modal = document.getElementById("myModal");

for (let i=0; i<imageBoxes.length; i++) {
      imageBoxes[i].onmouseover = function() {
        imageTitles[i].style.display = "block";
      }
      imageBoxes[i].onmouseleave  = function() {
        imageTitles[i].style.display = "none";
      }
      imageTitles[i].onclick = function() {
        modal.style.display = "block";
        document.getElementById('modal-image').src = './image0'+ (i+1)+'.html';
      }
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}