import { domVars } from "./dom.js";
import { idleTimer } from "./idle-timer-tier-1-background.js";

function fadeIn(element) {
  element.style.opacity = "1.0";
  element.style.visibility = "visible";
}

function fadeOut(element) {
  element.style.opacity = "0.0";
  element.style.visibility = "hidden";
}

const countdownAmountInSeconds = 15; // How long the "Are you still there?" countdown will take

function timeoutModalInitFns() {
  domVars.timeoutModal.addEventListener("click", (event) => {
    event.stopPropagation();
    clearInterval(countdownTimer);
    timeLeft = countdownAmountInSeconds - 1;
    idleTimer.setup(); // tier 1
    fadeOut(domVars.timeoutModal);
  });
}

let timeLeft = countdownAmountInSeconds - 1;
let countdownTimer;
let resetLabelViewTimeoutId;
function countdownIterator() {
  //console.log(`countdown iteration, timeLeft = ${timeLeft}`);
  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    timeLeft = countdownAmountInSeconds - 1;
    domVars.countdownRemaining.innerText = "0";
    clearTimeout(resetLabelViewTimeoutId);
    // Reset the application
    resetLabelViewTimeoutId = setTimeout(refreshAppFns, 1000);
  } else {
    domVars.countdownRemaining.innerText = timeLeft;
  }
  timeLeft -= 1;
}

function runIdleTimerTier2() {
  countdownTimer = setInterval(countdownIterator, 1000);
}

function loadIdleTimerTier2() {
  fadeIn(domVars.timeoutModal);
  idleTimer.remove();
  domVars.countdownRemaining.innerText = countdownAmountInSeconds;
  timeLeft = countdownAmountInSeconds - 1;
  runIdleTimerTier2();
}

function refreshAppFns() {
  window.location.reload();
}

const idleTimerTier2 = {
  load: function () {
    loadIdleTimerTier2();
  },
  init: function () {
    timeoutModalInitFns();
  },
};

export { idleTimerTier2 };
