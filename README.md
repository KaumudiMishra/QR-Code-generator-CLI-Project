# QR Code Generator (Node.js)

A simple command-line QR Code Generator built with Node.js, using the Inquirer and qr-image packages.  
This project takes a user-input URL and generates a QR code image (PNG) and a text file saving that URL.

---

## Features

- Prompts the user to enter a URL in the terminal.  
- Generates a QR code image (qr_img.png) from the URL.  
- Saves the entered URL into a text file (URL.txt).  
- Uses Node.js core and NPM packages to handle input, output, and file creation.

---

## Concepts Covered

- Using Inquirer for command-line user input.  
- Using qr-image to generate QR codes.  
- Using Node’s built-in fs (File System) module to create and write files.  
- Working with ES Modules (import syntax) in Node.js.  
- Understanding NPM package installation and dependencies.

---

## Installation

1. Clone this repository
   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   cd qr-code-generator
   ```

2. Initialize Node.js (if not already done)
   ```bash
   npm init -y
   ```

3. Install dependencies
   ```bash
   npm install inquirer qr-image
   ```

4. Ensure ES Module support  
   In your package.json, add:
   ```json
   {
     "type": "module"
   }
   ```

---

## Usage

Run the app with Node.js:

```bash
node index.js
```

Then follow the prompt:

```
? Type in your URL: https://www.google.com
```

After entering the URL:
- A file named qr_img.png will be created — this is your QR code.  
- A file named URL.txt will be created — it stores your entered URL.

---

## Output Example

After running:

```
? Type in your URL: https://www.google.com
```

You’ll get:

- ✅ qr_img.png → QR Code that links to Google  
- ✅ URL.txt → contains https://www.google.com

---

## License

This project is for educational purposes under the MIT License.
