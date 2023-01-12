// Built using this reference for the idle detection function
// https://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm
//
// And refering to this stackoverflow post 3/29 to update this script
// https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript

// Define timeout functions for auto navigation back home on idle
const idleTimeoutInMiliseconds = 5 * 1000; // 5s for development
//const idleTimeoutInMiliseconds = 90 * 1000; // 90s for production
let idleTimeoutId;

function startIdleTimer() {
  // window.setTimeout returns an Id that can be used to start and stop a timer
  idleTimeoutId = window.setTimeout(doInactive, idleTimeoutInMiliseconds);
}

function doInactive() {
  console.log("doInactive");

  // Action taken on inactivity
  // Refresh to homepage
  //window.location.reload();
  removeIdleTimer();
}

function goActive() {
  console.log("Go active");
  startIdleTimer();
  // Do something along with startIdleTimer
}

function resetTimer() {
  window.clearTimeout(idleTimeoutId);
  goActive();
}

function setupIdleTimer() {
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

/********************************************************************
 *
 * I had tried putting all functions inside of an object but
 * the "this" context became too ugly
 *
 * Doesn't seem worth much since exporting a single object
 * like above looks graceful in other scripts
 *
 ********************************************************************/

// Not sure about this method
// Possibly defining as a class could help?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// const idleTimer = {
//     idleTimeoutId: 0,

//     idleTimeoutInMilliseconds: 5 * 1000, // 5s for development
//     //idleTimeoutInMilliseconds: 90 * 1000, // 90s for production

//     _start: function () {
//       // window.setTimeout returns an id that can be used to start and stop a timer

//       const boundDoInactive = this._doInactive.bind(this); // bind this to idleTimer otherwise this will be set to window within _doInactive

//       this.idleTimeoutId = window.setTimeout(
//         boundDoInactive,
//         this.idleTimeoutInMilliseconds
//       );
//     },

//     _doInactive: function () {
//       console.log("doInactive");

//       // Action taken on inactivity
//       // Refresh to homepage
//       //window.location.reload();
//       console.log(this);
//       this.remove();
//     },

//     _goActive: function () {
//       console.log("Go active");
//       this._start();
//       // Do something along with startIdleTimer
//     },

//     _resetTimer: function () {
//       window.clearTimeout(this.idleTimeoutId);
//       this._goActive();
//     },

//     _boundResetTimer:

//     setup: function () {
//       //console.log("Set up idle timer");
//       console.log(this);
//       const boundResetTimer = this._resetTimer.bind(this); // bind this to idleTimer otherwise this will be set to window within _resetTimer
//       // Referential equality problem for removing later

//       // Each of these events will reset the timer ("mousemove", "mousedown", etc)
//       // window.addEventListener("mousemove", this._resetTimer, false); // fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it
//       // window.addEventListener("mousedown", this._resetTimer, false); // fired at an element when a pointing device button is pressed while the pointer is inside the element (differs from "click")
//       // window.addEventListener("keydown", this._resetTimer, false); // fired when a key is pressed (for all keys, regardless of whether they produce a character value)
//       // window.addEventListener("DOMMouseScroll", this._resetTimer, false); // deprecated for "wheel"
//       // window.addEventListener("mousewheel", this._resetTimer, false); // deprecated for "wheel"
//       // window.addEventListener("wheel", this._resetTimer, false); // fires when the user rotates a wheel button on a pointing device (typically a mouse)
//       // window.addEventListener("touchmove", this._resetTimer, false); // fired when one or more touch points are moved along the touch surface
//       // window.addEventListener("touchstart", this._resetTimer, false); // fired when one or more touch points are placed on the touch surface
//       // window.addEventListener("pointermove", this._resetTimer, false); // fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action
//       window.addEventListener("mousemove", boundResetTimer, false); // fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it
//       window.addEventListener("mousedown", boundResetTimer, false); // fired at an element when a pointing device button is pressed while the pointer is inside the element (differs from "click")
//       window.addEventListener("keydown", boundResetTimer, false); // fired when a key is pressed (for all keys, regardless of whether they produce a character value)
//       window.addEventListener("DOMMouseScroll", boundResetTimer, false); // deprecated for "wheel"
//       window.addEventListener("mousewheel", boundResetTimer, false); // deprecated for "wheel"
//       window.addEventListener("wheel", boundResetTimer, false); // fires when the user rotates a wheel button on a pointing device (typically a mouse)
//       window.addEventListener("touchmove", boundResetTimer, false); // fired when one or more touch points are moved along the touch surface
//       window.addEventListener("touchstart", boundResetTimer, false); // fired when one or more touch points are placed on the touch surface
//       window.addEventListener("pointermove", boundResetTimer, false); // fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action

//       this._start();
//     },

//     remove: function () {
//       const boundResetTimer = this._resetTimer.bind(this); // bind this to idleTimer otherwise this will be set to window within _resetTimer

//       // window.removeEventListener("mousemove", this._resetTimer, false); // fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it
//       // window.removeEventListener("mousedown", this._resetTimer, false); // fired at an element when a pointing device button is pressed while the pointer is inside the element (differs from "click")
//       // window.removeEventListener("keydown", this._resetTimer, false); // fired when a key is pressed (for all keys, regardless of whether they produce a character value)
//       // window.removeEventListener("DOMMouseScroll", this._resetTimer, false); // deprecated for "wheel"
//       // window.removeEventListener("mousewheel", this._resetTimer, false); // deprecated for "wheel"
//       // window.removeEventListener("wheel", this._resetTimer, false); // fires when the user rotates a wheel button on a pointing device (typically a mouse)
//       // window.removeEventListener("touchmove", this._resetTimer, false); // fired when one or more touch points are moved along the touch surface
//       // window.removeEventListener("touchstart", this._resetTimer, false); // fired when one or more touch points are placed on the touch surface
//       // window.removeEventListener("pointermove", this._resetTimer, false); // fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action
//       window.removeEventListener("mousemove", boundResetTimer, false); // fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it
//       window.removeEventListener("mousedown", boundResetTimer, false); // fired at an element when a pointing device button is pressed while the pointer is inside the element (differs from "click")
//       window.removeEventListener("keydown", boundResetTimer, false); // fired when a key is pressed (for all keys, regardless of whether they produce a character value)
//       window.removeEventListener("DOMMouseScroll", boundResetTimer, false); // deprecated for "wheel"
//       window.removeEventListener("mousewheel", boundResetTimer, false); // deprecated for "wheel"
//       window.removeEventListener("wheel", boundResetTimer, false); // fires when the user rotates a wheel button on a pointing device (typically a mouse)
//       window.removeEventListener("touchmove", boundResetTimer, false); // fired when one or more touch points are moved along the touch surface
//       window.removeEventListener("touchstart", boundResetTimer, false); // fired when one or more touch points are placed on the touch surface
//       window.removeEventListener("pointermove", boundResetTimer, false); // fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action

//       window.clearTimeout(this.idleTimeoutId);
//       //console.log("removeIdleTimer called");
//     },
//   };

//   export { idleTimer };
