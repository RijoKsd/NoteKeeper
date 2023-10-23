"use strict";

/**
 * Attaches an event listener to a collection of DOM elements
 * @param {Array<HTMLElement} $elements - An array of Dom elements to attach the even listener to
 * @param {string} eventType - The type of event to listen for (e.g. click, mouseover, etc.)
 * @param {Function} callback - The callback function to execute when the event is occurs
 */

const addEventOnElements = function ($elements, eventType, callback) {
  $elements.forEach(($element) =>
    $element.addEventListener(eventType, callback)
  );
};

/**
 * Generates a greeting message based on the current hour of the day
 *
 * @param {number} currentHour - The current hour of the day (0-23)
 * @returns {string} - A greeting message with a salutation based on the current hour
 */

const getGreetingMsg = function (currentHour) {
  const /** {string} */  greeting = 
  currentHour < 5 ? "Night" : 
  currentHour < 12 ? "Morning" :
  currentHour < 18 ? "Afternoon" :
  "evening";

  /* 
  currentHour < 5 ? "Night" :
  currentHour < 12 ? "Morning" :
  currentHour < 15 ? "Noon":
  currentHour < 17 ? "Afternoon" :
  currentHour < 20 ? "Evening" :
  "Night";
  */
 
  return `Good ${greeting}`;
};
 
export { addEventOnElements, getGreetingMsg };
