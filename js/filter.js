// At start, show all items
filterSelection("all")


// Show/hide portfolio items using the "show" class
function filterSelection(c) {
  if (c == "all") c = "";

  var items = document.getElementsByClassName("pf-item"); // Get all portfolio items 

  for (var i=0; i<items.length; i++) {
    w3RemoveClass(items[i], "show");                                        // Remove 'show' class
    if (items[i].className.indexOf(c) > -1) w3AddClass(items[i], "show");   // Reappend it only if it has the tag we want
  }
}


// Show filtered elements
function w3AddClass(element, clName) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = clName.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
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