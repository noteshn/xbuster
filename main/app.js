/*
  app.js
  ------------------------------------------
  Core script for managing the logic of the 
  Xbuster extension's popup and settings UI.

  Responsibilities:
  - Handles user interactions from popup.html
    (e.g., toggles, buttons, settings updates).
  - Communicates with background.js for:
      • enabling/disabling rules
      • updating stored preferences
      • sending or receiving extension state
  - Reads and writes data using chrome.storage.
  - Updates the popup interface in real time 
    based on the extension's current status.

  Notes:
  - Avoid long-running tasks inside popup scripts;
    the popup closes automatically when unfocused.
  - Keep functions modular and easy to debug.
  - All Chrome Extension API calls must follow
    Manifest V3 rules and use async patterns.

  Last updated: [add date]
*/
