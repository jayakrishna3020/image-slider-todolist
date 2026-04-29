window.onload = function () {

    const slider = document.getElementById("slider");
    const images = document.querySelectorAll(".slider img");
  
    let index = 0;
    const imgWidth = images[0].clientWidth + 10; // includes gap
  
    window.moveRight = function () {
      index++;
      if (index >= images.length) index = 0;
      slider.scrollLeft = index * imgWidth;
    };
  
    window.moveLeft = function () {
      index--;
      if (index < 0) index = images.length - 1;
      slider.scrollLeft = index * imgWidth;
    };
  
  };
  console.log("JS Loaded");