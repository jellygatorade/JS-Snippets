import { domVars } from "./dom.js";
import { idleTimer } from "./idle-timer-tier-1-background.js";
import { idleTimerTier2 } from "./idle-timer-tier-2-modal.js";

window.addEventListener("load", () => {
  idleTimerTier2.init();

  domVars.setupButton.addEventListener("click", idleTimer.setup);
  domVars.removeButton.addEventListener("click", idleTimer.remove);
});
