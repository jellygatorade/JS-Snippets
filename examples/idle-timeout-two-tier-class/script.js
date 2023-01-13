import { idleTimer } from "./idle-timer-class.js";

const setupButton = document.getElementById("setupBtn");
const removeButton = document.getElementById("removeBtn");
const cancelButton = document.getElementById("cancelBtn");

// Obviously you could create more instances but this class is only intended to have one instance
// ""../idle-timeout-one-tier" directory creates a singleton instance in a js module
const timer = new idleTimer(5000);
//console.log(backgroundIdleTimer);

setupButton.addEventListener("click", timer.setup);
removeButton.addEventListener("click", timer.remove);
cancelButton.addEventListener("click", timer.cancel);
