import { idleTimerTier2 } from "./idle-timer-tier-2-modal.js";

// Built using this reference for the idle detection function
// https://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm
//
// And refering to this stackoverflow post 3/29 to update this script
// https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript

// Define timeout functions for auto navigation back home on idle
const idleTimeoutInMiliseconds = 5 * 1000; // 5s for development
//const idleTimeoutInMiliseconds = 90 * 1000; // 90s for production

let idleTimeoutId = 0; // initialize to 0

function startIdleTimer() {
  // window.setTimeout returns an Id that can be used to start and stop a timer
  idleTimeoutId = window.setTimeout(doInactive, idleTimeoutInMiliseconds);
}

function doInactive() {
  console.log("doInactive");

  // Action taken on inactivity
  // Refresh to homepage
  //window.location.reload();

  removeIdleTimer(); // tier 1 (this script)
  idleTimerTier2.load(); // tier 2
}

function goActive() {
  console.log("Go active");
  startIdleTimer();
  // Do something along with startIdleTimer
}

function resetTimer() {
  window.clearTimeout(idleTimeoutId);
  idleTimeoutId = 0; // setting to 0 allows setupIdleTimer to pass the check
  goActive();
}

function setupIdleTimer() {
  // check if running, idleTimeoutId will be > 0
  if (!idleTimeoutId) {
    console.log("Set up idle timer");
    // Each of these events will reset the timer ("mousemove", "mousedown", etc)
    window.addEventListener("mousemove", resetTimer, false); // fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it
    window.addEventListener("mousedown", resetTimer, false); // fired at an element when a pointing device button is pressed while the pointer is inside the element (differs from "click")
    window.addEventListener("keydown", resetTimer, false); // fired when a key is pressed (for all keys, regardless of whether they produce a character value)
    window.addEventListener("DOMMouseScroll", resetTimer, false); // deprecated for "wheel"
    window.addEventListener("mousewheel", resetTimer, false); // deprecated for "wheel"
    window.addEventListener("wheel", resetTimer, false); // fires when the user rotates a wheel button on a pointing device (typically a mouse)
    window.addEventListener("touchmove", resetTimer, false); // fired when one or more touch points are moved along the touch surface
    window.addEventListener("touchstart", resetTimer, false); // fired when one or more touch points are placed on the touch surface
    window.addEventListener("pointermove", resetTimer, false); // fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action
    startIdleTimer();
  }
}

function removeIdleTimer() {
  window.removeEventListener("mousemove", resetTimer, false); // fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it
  window.removeEventListener("mousedown", resetTimer, false); // fired at an element when a pointing device button is pressed while the pointer is inside the element (differs from "click")
  window.removeEventListener("keydown", resetTimer, false); // fired when a key is pressed (for all keys, regardless of whether they produce a character value)
  window.removeEventListener("DOMMouseScroll", resetTimer, false); // deprecated for "wheel"
  window.removeEventListener("mousewheel", resetTimer, false); // deprecated for "wheel"
  window.removeEventListener("wheel", resetTimer, false); // fires when the user rotates a wheel button on a pointing device (typically a mouse)
  window.removeEventListener("touchmove", resetTimer, false); // fired when one or more touch points are moved along the touch surface
  window.removeEventListener("touchstart", resetTimer, false); // fired when one or more touch points are placed on the touch surface
  window.removeEventListener("pointermove", resetTimer, false); // fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action
  window.clearTimeout(idleTimeoutId);
  idleTimeoutId = 0; // setting to 0 allows setupIdleTimer to pass the check
  console.log("removeIdleTimer called");
}

const idleTimer = {
  setup: function () {
    setupIdleTimer();
  },
  remove: function () {
    removeIdleTimer();
  },
};

// Export so that the idle timer can be started and suspended selectively within the application
export { idleTimer };
