"use strict";

/**
 * Attaches an event listener to a collection of DOM elements
 * @param {Array<HTMLElement} $elements - An array of Dom elements to attach the even listener to
 * @param {string} eventType - The type of event to listen for (e.g. click, mouseover, etc.)
 * @param {Function} callback - The callback function to execute when the event is occurs
 */

const addEventOnElements = function ($elements, eventType, callback) {
  $elements.forEach(($element) =>
    $element.addEventListener(eventType, callback));
};

export { addEventOnElements };
