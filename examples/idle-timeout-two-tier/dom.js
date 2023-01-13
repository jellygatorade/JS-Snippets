const domVars = {};

window.addEventListener("load", () => {
  domVars.setupButton = document.getElementById("setupBtn");
  domVars.removeButton = document.getElementById("removeBtn");

  domVars.timeoutModal = document.getElementById("timeout-modal");
  domVars.countdownRemaining = document.getElementById("countdown-remaining");
});

export { domVars };
