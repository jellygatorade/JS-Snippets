import { idleTimer } from "./idle-timer-class.js";

const setupButton = document.getElementById("setupBtn");
const removeButton = document.getElementById("removeBtn");

// Obviously you could create more instances but this class is only intended to have one instance
// ""../idle-timeout-one-tier" directory creates a singleton instance in a js module
const backgroundIdleTimer = new idleTimer(5000);
console.log(backgroundIdleTimer);

setupButton.addEventListener("click", backgroundIdleTimer.setup);
removeButton.addEventListener("click", backgroundIdleTimer.remove);
