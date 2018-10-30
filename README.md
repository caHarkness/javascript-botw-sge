# javascript-botw-sge
A pure JavaScript port of Marc Robledo's Wii U and Switch game save editor. Please check out the project over at [his repository](https://github.com/marcrobledo/savegame-editors/tree/master/zelda-botw).

## How To Test
There is no official way to test this quite yet, but if you're eager, you can do this straight from Google Chrome:
1. Open a new tab and navigate to `about:blank` by typing it in the address bar.
2. Open up the Google Developer Tools by pressing `Ctrl`, `Shift`, and `I` at the same time.
3. Copy the raw contents of `MarcBinFile.min.js` and paste it into the interactive console.
4. Press `Enter` to evaluate it, effectively running the script.
5. Do the same for `SaveAs.min.js`.
6. Then, finally, repeat it once more for `Zelda.js`.
7. In the interactive console, type `SavegameEditor.chromeTest()` and hit `Enter`.
8. Select your `game_data.sav` you wish to *inspect only*.
9. Type `SavegameEditor.VirtualFields` and press `Enter` to see a detailed JSON structure of your save data.

## Why does this exist?
I am getting ready to port this masterpiece over to the Nintendo Switch because both save editors (or implementations of) that currently exist for it lack everything I expected the save editor to have. I did consider finding a way to load this into the stripped down version of the Switch's browser, but considering how complicated the web app is, I decided it would be a more fun learning experience to port web browser software to an entirely different rendering engine.

Getting this tool to run without the need of any DOM elements is a major feat of its own, as it heavily relied on the DOM tree to store inventory items. Because JavaScript is such a widely adapted scripting language, I figured this project needed its own repository so should you choose to find new ways to implement this game save editor and its features, you can.

Give ALL your attention to [Mark Robledo](https://github.com/marcrobledo/savegame-editors/tree/master/zelda-botw) and the others who helped him on *his* project. This is merely a modification of their work.
