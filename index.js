const lamp = document.getElementById("lamp");
let isOn = false;

lamp.addEventListener("click", () => {
  isOn = !isOn;
  lamp.src = isOn ? "car/images/svitchon.png" : "car/images/svitchoff.jpg";
});