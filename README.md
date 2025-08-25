# Terminal Portfolio

This portfolio is an interactive web application designed to look and feel like a real UNIX terminal. It's built entirely with vanilla HTML, CSS, and JavaScript, showcasing a dynamic and engaging way to present my skills and projects.

## Features

* **Authentic Terminal Experience:** A single-stream interface where commands and their outputs appear chronologically.
* **Rich Command Set:** Includes a wide range of standard commands like `ls`, `cd`, `cat`, `mkdir`, `rm`, `history`, and more.
* **Simulated File System:** Navigate a realistic directory structure (`/home`, `/etc`, `/bin`) with readable and writable files.
* **Dynamic Content:** Special commands like `skills`, `projects`, and `neofetch` display portfolio-specific information.
* **Customizable Theme:** Switch between light and dark modes on the fly with the `theme` command.
* **No Dependencies:** Runs on pure HTML, CSS, and JavaScript—no external libraries or frameworks needed.

## How It Works

The application is a single HTML file that cleverly manages state and manipulates the DOM to simulate a real-time console.

1.  **Single-Stream Architecture:** The entire terminal is a single `<div>` container. When a user enters a command, the active `<input>` field is converted into static text, the command's output is appended below it, and a new, active `<input>` line is generated at the bottom.
2.  **State Management:** All application states—such as the current directory (`pwd`), command history, and the in-memory file system—are managed within a single JavaScript object.
3.  **Command Handling:** A central `handleCommand` function parses user input, matches it against a list of available commands, and executes the corresponding logic, whether it's displaying text, manipulating the virtual file system, or opening a new tab.
4.  **DOM Manipulation:** JavaScript is used to dynamically create, modify, and append elements to the main terminal `<div>`, ensuring the display updates in real-time as the user interacts with it.

## Technical Breakdown

The project is intentionally simple, relying on the three core technologies of the web without any frameworks or libraries.

* **HTML (The Skeleton):** The structure is minimal. The entire application lives within a single parent `<div>` (`#terminal`). All content, including past commands, output, and the current input line, is dynamically injected into this container by JavaScript.
* **CSS (The Style):** The visual "terminal" aesthetic is achieved entirely with CSS. Key techniques include:
    * **Monospace Font:** Using `font-family: monospace` to give it a classic console look.
    * **Color Scheme:** CSS variables (`:root`) are used to define the color palette (background, text, prompt color), which makes the `theme` command easy to implement by simply swapping out these variables.
    * **Layout:** The layout is a simple top-to-bottom flow. The scrollbar is hidden to maintain a clean, immersive appearance while still allowing the user to scroll through their command history.
* **JavaScript (The Brains):** All the logic is handled in vanilla JavaScript.
    * **Event Handling:** An event listener waits for `keydown` events on the active input field. It specifically listens for the "Enter" key to submit a command and the "ArrowUp"/"ArrowDown" keys to navigate through the command history.
    * **In-Memory File System:** The entire file system is a large JavaScript `object`. Directories are objects that contain a `children` object, and files are objects with a `content` string. Commands like `ls`, `cd`, and `cat` are just functions that read from and modify this object.
    * **DOM Manipulation:** This is the core of the interactivity. When you enter a command, the script:
        1.  Takes the current `<input>` element.
        2.  Replaces it with a static `<div>` containing the same text.
        3.  Creates new `<div>` elements to display the output of the command.
        4.  Appends a brand new `<input>` element at the very bottom for the next command.
        5.  Automatically scrolls the page to the bottom to keep the active prompt in view.

## Available Commands

Here are some of the commands you can use:

| Command      | Description                                   |
| :----------- | :-------------------------------------------- |
| `help`       | Display the list of all available commands.   |
| `clear`      | Clear the terminal screen.                    |
| `reboot`     | Reload the terminal session.                  |
| `ls [path]`  | List contents of the specified directory.     |
| `cd [path]`  | Change the current directory.                 |
| `cat [file]` | Display the content of a file.                |
| `pwd`        | Show the current working directory.           |
| `mkdir <dir>`| Create a new directory.                       |
| `touch <file>`| Create a new empty file.                    |
| `rm <file>`  | Remove a file or directory.                   |
| `history`    | Show your command history.                    |
| `whoami`     | Display the current user.                     |
| `date`       | Show the current date and time.               |
| `neofetch`   | Display system information and an ASCII logo. |
| `skills`     | Show a list of my professional skills.        |
| `projects`   | Display a list of my notable projects.        |
| `github`     | Open my GitHub profile in a new tab.          |
| `theme`      | Toggle between light and dark themes.         |

## License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2024 marecL

Permission is hereby granted, free of charge, to a person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
