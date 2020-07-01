window.addEventListener("load", () => {
  let translate = 0;

  setInterval(async () => {
    let slider = document.getElementById("heroSlider");

    if (translate === 200) {
      translate = 0;
      slider.style.transform = "translateX(0)";
    } else {
      translate += 100;
      slider.style.transform = "translateX(-" + translate + "%)";
    }
  }, 5000);
});
