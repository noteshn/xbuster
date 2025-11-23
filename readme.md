# Xbuster – Chrome Extension

⚠️ **Warning: This extension is still under development and not ready for production use.**

Xbuster is a lightweight Chrome extension designed to help users stay focused online by reducing access to distracting websites and creating a more productive browsing environment.

This project uses **Manifest V3**, **Declarative Net Request (DNR)** rules, and a simple popup interface.

## Features

* Toggle filtering on or off from the popup
* Blocks distracting sites using Chrome’s rules engine
* Lightweight and fast
* Customizable domain rules via `rules.json`
* Clean user interface
* Privacy-friendly: no external servers or tracking

## Project Structure

```
extension/
│ manifest.json
│ rules.json
│ background.js
│
├─ popup/
│   ├─ popup.html
│   ├─ style.css
│   └─ script.js
│
├─ images/
│   ├─ logo16.png
│   ├─ logo32.png
│   ├─ logo48.png
│   └─ logo64.png
│
└─ blocked/
    └─ blocked.html
```

## How It Works

### Declarative Rules

`rules.json` defines websites to block or redirect.

### Background Service Worker

`background.js` enables or disables the rules depending on user preferences.

### Popup Interface

The popup provides a simple toggle for enabling or disabling filtering.

### Storage Sync

Settings are saved using `chrome.storage.sync`.

## Installation (Developer Mode)

1. Clone or download the repository:

   ```
   git clone https://github.com/noteshn/xbuster.git
   ```
2. Open Chrome and go to:

   ```
   chrome://extensions
   ```
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project folder.

## Customizing the Block List

Add or modify entries in `rules.json`:

```json
{
  "id": 10,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "distractingsite.com",
    "resourceTypes": ["main_frame"]
  }
}
```

Reload the extension afterward.

## Notes

* Xbuster runs entirely locally on your device.
* No browsing data is sent to external servers.
* Built for a clean and focused browsing experience.
