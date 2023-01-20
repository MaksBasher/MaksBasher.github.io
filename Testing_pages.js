//Collapsable menus for categories page

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//Popup for submitting the review

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//Scroller for the landing page


//Burger menu (?)

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nav_links = document.getElementsByClassName('nav_links') [0]

toggleButton.addEventListener('click' ,() => {
  nav_links.classList.toggle('active')
})