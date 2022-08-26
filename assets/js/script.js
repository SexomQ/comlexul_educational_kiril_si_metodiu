// JavaScript Document

// ========index.html=========

// NavbarChange
navbar_1 = document.getElementById("navbar-transparent");
navbar_2 = document.getElementById("navbar-white");
window.onscroll = function() {nav_1Function()};
window.onscroll = function() {nav_2Function()};
function nav_1Function() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    navbar_1.style.top = "-100px";
    navbar_1.style.opacity = "0";
  } 
  else {
    navbar_1.style.top = "0";
    navbar_1.style.opacity = "1";
  }
}
function nav_2Function() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    navbar_2.style.top = "0";
  } 
  else {
    navbar_2.style.top = "-350px";
  }
}

// ScrollButton
function scrollFunction() {
  document.body.scrollTop = 550; // For Safari
  document.documentElement.scrollTop = 550; // For Chrome, Firefox, IE and Opera
}

// ========work.html=========

  //animation with 4 squares and buttons
  function ButtonOpenFunction(){
    var animation = document.getElementById('animation');
    var area = document.getElementById('ButtonOpen');
    var showButtons = document.getElementById('buttons');
    animation.classList.toggle('work__button-icon-active');
    area.classList.toggle('work__button-area-active');
    showButtons.classList.toggle('buttons-show');
  }

  // WORK filter
  filterSelection("all")

  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
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

  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("buttons");
  var btns = btnContainer.getElementsByClassName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
