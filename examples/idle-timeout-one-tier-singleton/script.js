import { idleTimer } from "./idle-timer-singleton.js";

const setupButton = document.getElementById("setupBtn");
const removeButton = document.getElementById("removeBtn");

setupButton.addEventListener("click", idleTimer.setup);
removeButton.addEventListener("click", idleTimer.remove);
