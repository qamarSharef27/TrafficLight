const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");

function activateLight(light, duration) {
  redLight.style.opacity = 0.3;
  yellowLight.style.opacity = 0.3;
  greenLight.style.opacity = 0.3;

  light.style.opacity = 1;
  setTimeout(() => {
    light.style.opacity = 0.3;
  }, duration);
}

function sequenceLights() {
  setTimeout(() => {
  activateLight(redLight, 3000);
  setTimeout(() => {
    activateLight(yellowLight, 2000);
     setTimeout(() => {
      activateLight(greenLight, 3000);
       setTimeout(() => {
        activateLight(yellowLight, 2000);
      }, 3000); 
    }, 2000); 
  }, 3000); 
}, 2000); 
  setInterval(() => {
     setTimeout(() => {
      activateLight(redLight, 3000);
      setTimeout(() => {
        activateLight(yellowLight, 2000);
        setTimeout(() => {
          activateLight(greenLight, 3000);
          setTimeout(() => {
            activateLight(yellowLight, 2000);
          }, 3000); 
        }, 2000); 
      }, 3000); 
    }, 2000); 
  }, 10000); 
}


sequenceLights(); 