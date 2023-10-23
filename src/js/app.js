"use strict";

/**
 * Module import
 */
import { addEventOnElements, getGreetingMsg } from "./utils.js";

/**
 * Toggle sidebar in small screen
 */

const /** {HTMLElement} */ $sidebar = document.querySelector("[data-sidebar]");
const /**{Array<HTMLElement>} */ $sidebarTogglers = document.querySelectorAll(
    "[data-sidebar-toggler]"
  );
const /**{HTMLElement} */ $overlay = document.querySelector(
    "[data-sidebar-overlay]"
  );

addEventOnElements($sidebarTogglers, "click", function () {
  $sidebar.classList.toggle("active");
  $overlay.classList.toggle("active");
});

/**
 * Show greeting message on homepage
 */

const /** {HTMLElement } */ $greetElem =
    document.querySelector("[data-greeting]");

const /** {number} */ currentHour = new Date().getHours();

$greetElem.textContent = getGreetingMsg(currentHour);

/**
 * Show current date on homepage
 */

const /** {HTMLElement} */ $currentDateElem = document.querySelector("[data-current-date]");
console.log("🚀 ~ file: app.js:41 ~ currentDateElem:", $currentDateElem);

$currentDateElem.textContent = new Date().toDateString().replace(' ',', ');
// $currentDateElem.textContent = new Date().toLocaleDateString("en-US", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// });


