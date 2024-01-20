AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },
    },
  
    update: function () {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function (elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", (e) => {
        if (elementId.includes("#coin")) {
          console.log(elementId + " collision");
        } else if (elementId.includes("#hurdle")) {
          console.log("fish collision");
        }
      });
    },
    updateTargets: function () {
      var element = document.querySelector("#treasure");
      var count = element.getAttribute("text").value;
      var currentTargets = parseInt(count);
      currentTargets -= 1;
      element.setAttribute("text", {
        value: currentTargets,
      });
    },
    updateScore: function () {
      var element = document.querySelector("#score");
      var count = element.getAttribute("text").value;
      var currentScore = parseInt(count);
      currentScore += 50;
      element.setAttribute("text", {
        value: currentScore,
      });
    },
    gameOver: function () {
      var RotationEl = document.querySelector("#Rotation");
      var element = document.querySelector("#game_over_text");
      element.setAttribute("visible", true);
      planeEl.setAttribute("dynamic-body", {
        mass: 1
      });
    },
  
  });
  