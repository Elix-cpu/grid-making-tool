# Grid making tool
A browser-based PWA for artists to overlay grids on reference photos. Built with HTML5 Cnvas and vanilla Javascript.

## Table of Contents
- [Features](#features)
- [Demo & Screenshots](#demo--screenshots)
- [Install & Run Locally](#install--run-locally)
- [Supported Files & Browsers](#supported-files--browsers)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Privacy & Security](privacy--security)
- [License & Credits](#license--credits)

## Features
-  #### Choosing between "Count Mode" or "Shape Mode".
The first one lets the user decide the number of rows/columns for the grid. The second one calculates the aspect ratio of the image and generates the number of rows/columns to ensure every grid cell remains the desired shape.

-  #### Focus Mode
Allows to click any square to isolate it and dim the rest of the image.

- #### Grasyscale Toggle
Converts the image to B&W to change values.

- #### PWA-capable
Installable on iOS and Android home screens. Works completely offline once installed.

## Demo & Screenshots
#### Live Demo: https://gridarttool.netlify.app

<img width="2586" height="1577" alt="image" src="https://github.com/user-attachments/assets/b7ee195d-04d0-4a39-a89e-aa2178110d7e" />

## Install & Run Locally
Since the project uses Service Workers and Canvas image manipulation, it requires a local server environment to avoid security errors. 
#### Python
1. Clone the repository
2. Navigate into the folder cd grid-making-tool
3. Start a simple server
4. Open http://localhost:8000 in your browser

#### VS Code Live Server
1. Open the project folder in VS Code
2. Install the "Live Server" extension.
3. Right click index.html and select "Open with Live Server"

## Supported Files & Browsers
Images: JPG, PNG, WEBP, GIF

Browsers: Chrome, Edge, Safari, Firefox, Opera

## Contributing
Contributions are welcome! If you want to add any features:
1. File an issue describing the enhancement
2. Fork the repo
3. Create a new branch
4. Commit your changes
5. Open a Pull Request

## Roadmap
- [] Grid mode for perspective drawing
- [] Local Storage support to remember user preferences (grid color/size) on reload
- [] Zoom/Pan capability for large images

## Privacy & Security 
All image processing is performed locally in your browser and your photos are never uploaded to a server/stored in a database.

## License & Credits
This project is licensed under the MIT License.

Developer: Elisa Sanfedele

Built with Google Gemini for rapid prototyping, PWA configuration and debugging.
