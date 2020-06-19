(() => {
  "use strict";

  console.log("async script executed");

  document.addEventListener("DOMContentLoaded", () => {
    console.log("This should not be executed because this listener is defined after DOMContentLoaded event.");
  });
})();
