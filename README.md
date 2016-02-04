# Arduino-LocalTestRepo
A node.js server to deploy your board packages locally.

You will need Node.js

On OS X and Linux, please install Node.js using NVM (Node Version Manager) to avoid requiring the `sudo` command.
On Windows, install as usual.

## How to use
Package up your core files into a *.tar.bz2 archive, then gather the following about your archive:
 * The SHA 256 checksum (using sha256sum on *nix machines)
 * The archive file size
 
 Then, update the included package.json accordingly (checksum, board names, etc). 
 Copy and paste your archive file into this project's directory.
 
 Start the Arduino IDE. In a terminal, go to this project directory, and run `npm install` to install dependencies the first time you run the server (or if package.json changes). Start this server by running `node index.js`.
 
 To install your local package:
  1. Open the **Preferences** of the Arduino IDE.
  2. Add this URL `http://localhost:8080/package-build.json` in the **Additional Boards Manager URLs** field, and click OK.
  3. Open the **Boards Manager** (menu Tools->Board->Board Manager...)
  4. Install **Local Test Package**
  5. Select one of the boards under **SAMD Hourly build XX** in Tools->Board menu
  6. Compile/Upload as usual

If you already installed an hourly build and you want to update it with the latest:
  1. Open the **Boards Manager** (menu Tools->Board->Board Manager...)
  2. Remove **Local Test Package**
  3. Install again **Local Test Package**, the Board Manager will download the latest build replacing the old one.
