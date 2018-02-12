# Browser Sniffer
A simple class for getting information about the current browser

---

## Installation
This is available as a package on npm so you can add this to your project by using npm or yarn

**npm**
```bash
npm install z-browser-sniffer
```

**yarn**
```bash
yarn add z-browser-sniffer
```

## Usage
In your main JavaScript file, import the class

```javascript
import BrowserSniffer from 'z-browser-sniffer';

let sniff = new BrowserSniffer();

// Gives you access to the browser and the browser's version
console.log(sniff.browser, sniff.name, sniff.version); // Chrome 63, Chrome, 63

// You can also test against them if you want
console.log(sniff.matchBrowser('Chrome 63')); // true/false

// It is case insensitive and matches the individual name and version, but
// if you want to test individually you can
console.log(sniff.matchName('Chrome')); // true/false

// Note that it's major browser versions
console.log(sniff.matchVersion('63')); // true/false
```

---

## Building
If for some reason, you want to build the files for this library yourself (instead of using the `dist` folder), you can run the following commands to work locally with it

*Note: Don't forget to install the dev dependencies*

**Running `gulp`
```bash
gulp # This command builds the files, then watches for any changes in the src directory
gulp build # This command only builds the files
gulp watch # This command only watches the files
```
