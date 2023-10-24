"use strict";

/**
 * Import
 */

import { Tooltip } from "./Tooltip.js";
import { activeNotebook, makeElemEditable } from "../utils.js";
import { db } from "../db.js";
import { client } from "../client.js";

const /**{HTMLElement} */ $notePanelTitle = document.querySelector(
    "[data-note-panel-title]"
  );
/**
 *
 *  Creates a navigation item representing  a notebook. This item displays the notebook's name, allows editing
 * and deletion of the notebook and handles click events to display the notes in the notebook.
 *
 * @param {string} id - The id of the notebook
 *
 * @param {string} name - The name of the notebook
 *
 * @returns {HTMLElement} - An HTML element representing the navigation item for the notebook
 */

export const NavItem = function (id, name) {
  const /** {HTMLElement} */ $navItem = document.createElement("div");
  $navItem.classList.add("nav-item");
  $navItem.setAttribute("data-notebook", id);

  $navItem.innerHTML = `
    <span class="text text-label-large" data-notebook-field> ${name}</span>
    <button
      class="icon-btn small"
      aria-label="Edit notebook"
      data-tooltip="Edit notebook"
      data-edit-btn
    >
      <span class="material-symbols-rounded" aria-hidden="true">edit</span>
      <div class="state-layer"></div>
    </button>

    <button
      class="icon-btn small"
      aria-label="Delete notebook"
      data-tooltip="Delete notebook"
      data-edit-btn
    >
      <span class="material-symbols-rounded" aria-hidden="true">delete</span>
      <div class="state-layer"></div>
    </button>
    <div class="state-layer"></div>
  `;
  // Show tooltip on edit and delete button
  const /** {Array<HTMLElement>} */ $tooltipElems =
      $navItem.querySelectorAll("[data-tooltip]");
  $tooltipElems.forEach(($elem) => Tooltip($elem));

  /**
   * Handles the click event on the navigation item. Updates the note panel's title, retrieves the associated notes,
   * and makes the item as active.
   */

  $navItem.addEventListener("click", function () {
    $notePanelTitle.textContent = name;
    activeNotebook.call(this);
  });

  /**
   * Notebook edit functionality
   */

  const /** {HTMLElement} */ $navItemEditBtn =
      $navItem.querySelector("[data-edit-btn]");
  const /** {HTMLElement} */ $navItemField = $navItem.querySelector(
      "[data-notebook-field]"
    );

  $navItemEditBtn.addEventListener(
    "click",
    makeElemEditable.bind(null, $navItemField)
  );

  $navItemField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      this.removeAttribute("contenteditable");

      // Update edited data in database
      const updatedNotebookData = db.update.notebook(id, this.textContent); // this: navItemField

      // Render updated notebook
      client.notebook.update(id, updatedNotebookData);
    }
  });

  /**
   * Notebook delete functionality
   */

  const /** {HTMLElement} */ $navItemDeleteBtn =
      $navItem.querySelector("[data-delete-btn]");
  $navItemDeleteBtn.addEventListener("click", function(){
     const /** {Object} */ modal = DeleteConfirmModal();
  });
  return $navItem;
};
