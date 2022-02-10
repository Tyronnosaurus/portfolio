// At start, show all items
filterSelection("all")


// Show/hide portfolio items using the "show" class
function filterSelection(c) {
  if (c == "all") c = "";

  var items = document.getElementsByClassName("pf-item"); // Get all portfolio items 

  for (var i=0; i<items.length; i++) {
    w3.removeClass(items[i], "show");                             // Remove 'show' class
    if (hasClass(items[i], c)){ w3.addClass(items[i], "show"); }  // Reappend it only if it has the tag we want
  }
}


function hasClass(element, c){
  return (element.className.indexOf(c) > -1);
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  
  btns[i].addEventListener(
    "click",
    function(){
      var btnContainer = document.getElementById("btnContainer");
      var current = btnContainer.getElementsByClassName("active");        // Find the button with the "active" class (there should only be one).
      current[0].className = current[0].className.replace(" active", ""); // Remove its "active" class
      this.className += " active";                                        // Add "active" class to the one we just clicked.
    }
  );

}