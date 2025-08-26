// --- CONFIGURATION ---
const config = {
    owner: "marecL",
    website: "profile",
    ascii: "███╗   ███╗ █████╗ ██████╗ ███████╗ ██████╗  \n████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔════╝  \n██╔████╔██║███████║██████╔╝█████╗  ██║       \n██║╚██╔╝██║██╔══██║██╔══██╗██╔══╝  ██║       \n██║ ╚═╝ ██║██║  ██║██║  ██║███████╗╚██████╗ \n╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ",
    theme: "dark",
    colors: {
        light: { background: "#ffffff", text: "#000000", prompt: "rgb(240, 154, 74)", command: "rgb(255, 7, 7)" },
        dark: { background: "#000000", text: "#ffffff", prompt: "rgb(240, 154, 74)", command: "rgb(255, 7, 7)" },
    },
    commands: [
        { name: "help", description: "Display the available commands.", aliases: ["h"], category: "core" },
        { name: "clear", description: "Clear the terminal screen.", aliases: ["c"], category: "core" },
        { name: "reboot", description: "Reboot the terminal.", aliases: [], category: "core" },
        { name: "date", description: "Display the current date and time.", aliases: [], category: "info" },
        { name: "whoami", description: "Display the current user.", aliases: [], category: "info" },
        { name: "history", description: "Show command history.", aliases: [], category: "info" },
        { name: "echo", description: "Display a line of text.", aliases: [], category: "fun" },
        { name: "sudo", description: "Execute a command as the superuser (for fun).", aliases: [], category: "fun" },
        { name: "ls", description: "List directory contents.", aliases: [], category: "fs" },
        { name: "cd", description: "Change the current directory.", aliases: [], category: "fs" },
        { name: "pwd", description: "Print the name of the current working directory.", aliases: [], category: "fs" },
        { name: "cat", description: "Concatenate and display files.", aliases: [], category: "fs" },
        { name: "touch", description: "Create an empty file.", aliases: [], category: "fs" },
        { name: "mkdir", description: "Create a new directory.", aliases: [], category: "fs" },
        { name: "rm", description: "Remove files or directories.", aliases: [], category: "fs" },
        { name: "skills", description: "Display my skills.", aliases: ["s"], category: "info" },
        { name: "projects", description: "Display my projects.", aliases: ["p"], category: "info" },
        { name: "github", description: "Open my GitHub profile.", aliases: ["gh"], category: "links" },
        { name: "theme", description: "Change the terminal theme.", aliases: ["th"], category: "utility" },
        { name: "neofetch", description: "Display system information.", aliases: ["nf"], category: "info" },
        { name: "uname", description: "Display system information.", aliases: [], category: "info" },
        { name: "hostname", description: "Display the host name.", aliases: [], category: "info" },
        { name: "who", description: "Display the current user.", aliases: [], category: "info" },
        { name: "which", description: "Locate a command.", aliases: [], category: "core" },
        { name: "curl", description: "Transfer data from a URL.", aliases: [], category: "utility" },
        { name: "lscmds", description: "List all available commands with aliases.", aliases: [], category: "core" },
        { name: "credit", description: "Display project credits.", aliases: [], category: "info" },
        { name: "run", description: "Execute a file.", aliases: [], category: "fs" },
    ],
    filesystem: {
        '/': {
            type: 'directory',
            children: {
                'home': {
                    type: 'directory',
                    children: {
                        'marecL': {
                            type: 'directory',
                            children: {
                                'about.txt': { type: 'file', content: 'This is a file about me, marecL.\\nI am a web developer interested in creating cool things for the internet.' },
                                'projects': {
                                    type: 'directory',
                                    children: {
                                        'portfolio.txt': { type: 'file', content: 'This portfolio was made with HTML, CSS and JS.' }
                                    }
                                },
                                'contact.txt': { type: 'file', content: 'You can reach out via the `email` or `discord` commands.' },
                                'example.html': { type: 'file', content: '<h1>Hello World</h1><p>This is a test HTML file.</p>' },
                            }
                        }
                    }
                },
                'etc': {
                    type: 'directory',
                    children: {
                        'motd': { type: 'file', content: 'Welcome to marecL\\'s terminal portfolio!\\nHave a look around using `ls` and `cd`.' },
                        'config': { type: 'file', content: '## MOCK CONFIGURATION ##\\nTHEME=dark\\nPROMPT=\\'$USER@$HOST:$PWD$\\'' }
                    }
                },
                'bin': {
                    type: 'directory',
                    children: {
                        'ls': { type: 'file', content: 'executable' },
                        'cat': { type: 'file', content: 'executable' },
                        'pwd': { type: 'file', content: 'executable' }
                    }
                },
                'var': {
                    type: 'directory',
                    children: {
                        'log': {
                            type: 'directory',
                            children: {
                                'sys.log': { type: 'file', content: 'System boot... OK\\nServices started... OK' }
                            }
                        }
                    }
                }
            }
        }
    },
    neofetch: {
        ascii: `
            ....
           .......
          ..'' G. ''.
         .. '  ....' ..
        ..  '..''''..'  ..
       ..    '......'    ..
      ..      '....'      ..
     ..        ''''        ..
    ..          ''          ..
   ............................
   ............................
   ..          ''          ..
    ..        ''''        ..
     ..      '....'      ..
      ..    '......'    ..
       ..  '..''''..'  ..
        .. '  ....' ..
         ..'' .... ''.
           .......
            ....`,
        info: { "OS": "Arch Linux", "Host": "Portfolio v1.0", "Kernel": "6.1.12-arch1-1", "Uptime": "1 day, 2 hours, 34 minutes", "Packages": "1 (npm)", "Shell": "bash", "Resolution": "1920x1080", "DE": "Portfolio", "WM": "Terminal", "Theme": "gruvbox-dark", "Icons": "Papirus-Dark", "Terminal": "Portfolio", "CPU": "Intel i7-11800H @ 4.60GHz", "GPU": "NVIDIA GeForce RTX 3070", "Memory": "16GiB / 32GiB" }
    },
    links: { github: "https://github.com/Dailyscreen", discord: "dailyscreen", email: "louismarec@outlook.com", steam: "https://steamcommunity.com/profiles/76561198838986536/", reddit: "https://www.reddit.com/user/Dsioul/", webnovel: "https://www.webnovel.com/profile/4316517291" },
    skills: [ { name: "HTML/EJS", level: 50 }, { name: "CSS/SCSS", level: 30 }, { name: "JS", level: 45 }, { name: "PYTHON", level: 55 }, { name: "NODE.JS", level: 45 }, { name: "REACT.JS", level: 15 }, { name: "LUA", level: 30 }, { name: "C#", level: 60 } ],
    projects: [ { name: "PlexusFeed", description: "Modular, fast RSS agregator with his own proxy.", link: "https://github.com/DailyScreen/PlexusFeed" }, { name: "TerminalLikePortfolio", description: "A personal website styled for UNIX terminal.", link: "https://github.com/DailyScreen/TerminalLikePortfolio" } ],
};

// --- TERMINAL LOGIC ---
window.addEventListener("DOMContentLoaded", function () {
    const term = document.getElementById("terminal");
    const asciiArt = document.getElementById("ascii-art");

    // State variables
    let history = [];
    let historyIndex = 0;
    const homeDir = '/home/marecL';
    let currentPath = homeDir;
    let filesystem = config.filesystem;

    /**
     * Resolves a given path to its absolute form.
     * @param {string} path - The path to resolve.
     * @returns {string} The absolute path.
     */
    const resolvePath = (path) => {
        let components = (path.startsWith('/') ? [] : currentPath.split('/')).filter(Boolean);
        const targetComponents = path.replace('~', homeDir).split('/').filter(Boolean);

        for (const component of targetComponents) {
            if (component === '.') continue;
            if (component === '..') {
                if (components.length > 0) components.pop();
            } else {
                components.push(component);
            }
        }
        return '/' + components.join('/');
    };

    /**
     * Retrieves a node (file or directory) from the filesystem.
     * @param {string} path - The absolute path to the node.
     * @returns {object|null} The node object or null if not found.
     */
    const getNode = (path) => {
        const components = path.split('/').filter(Boolean);
        let node = filesystem['/'];
        for (const component of components) {
            if (node && node.type === 'directory' && node.children[component]) {
                node = node.children[component];
            } else {
                return null;
            }
        }
        return node;
    };

    /**
     * Retrieves the parent node of a given path.
     * @param {string} path - The absolute path.
     * @returns {{parent: object, name: string}|null} The parent node and the child's name.
     */
    const getParentNode = (path) => {
        const components = path.split('/').filter(Boolean);
        const name = components.pop();
        const parentPath = '/' + components.join('/');
        return { parent: getNode(parentPath), name };
    };

    const scrollToBottom = () => { term.scrollTop = term.scrollHeight; };
    const type = async (text, element) => {
        for (let i = 0; i < text.length; i++) {
            element.innerHTML += text.charAt(i);
            await new Promise((resolve) => setTimeout(resolve, 10));
            scrollToBottom();
        }
    };

    const createInputLine = () => {
        const inputLine = document.createElement('div');
        inputLine.className = 'input-line';
        const promptPath = currentPath.replace(homeDir, '~');
        inputLine.innerHTML = `
            <span class="prompt">
                <span class="ownerTerminal"><b>${config.owner}@${config.website}</b></span><b>:${promptPath}$</b>
            </span>
            <input class="cmd-input" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
        `;
        term.appendChild(inputLine);
        const inputField = inputLine.querySelector('.cmd-input');
        inputField.focus();
        inputField.addEventListener('keydown', handleKeyDown);
        scrollToBottom();
    };

    const executeCommand = async (cmdStr, input = '') => {
        const args = cmdStr.trim().split(" ").filter(Boolean);
        const commandName = args[0];
        const command = config.commands.find(c => c.name === commandName || (c.aliases && c.aliases.includes(commandName)));

        if (input) {
            args.push(input);
        }

        if (!command) {
            return `<span class="error">command not found: ${commandName}</span>`;
        }

        switch (command.name) {
            case "help":
                if (args[1] === '--category' && args[2]) {
                    const category = args[2];
                    const commandsInCategory = config.commands.filter(cmd => cmd.category === category);
                    if (commandsInCategory.length > 0) {
                        return commandsInCategory
                            .map(cmd => `<div><span class="commandName">${cmd.name.padEnd(10)}</span> - ${cmd.description}</div>`)
                            .join("");
                    } else {
                        return `<span class="error">No commands found in category: ${category}</span>`;
                    }
                } else {
                    const categories = [...new Set(config.commands.map(cmd => cmd.category))];
                    return `Available categories: ${categories.join(', ')}. Use 'help --category &lt;category&gt;' to see commands in a specific category.`;
                }
            case "clear":
                const startup = document.getElementById('startup');
                let nextSibling = startup.nextElementSibling;
                while (nextSibling) {
                    term.removeChild(nextSibling);
                    nextSibling = startup.nextElementSibling;
                }
                startup.style.display = 'block';
                return '';
            case "reboot": window.location.reload(); return '';
            case "date": return new Date().toString();
            case "whoami": return config.owner;
            case "history": return history.map((h, i) => `${i}: ${h}`).join('<br>');
            case "echo": return args.slice(1).join(' ');
            case "sudo": return "User is not in the sudoers file. This incident will be reported.";
            case "ls":
                const lsPath = resolvePath(args[1] || '.');
                const lsNode = getNode(lsPath);
                if (lsNode && lsNode.type === 'directory') {
                    const content = Object.keys(lsNode.children).map(key => {
                        const childNode = lsNode.children[key];
                        if (childNode.type === 'directory') {
                            return `<span class="directory">${key}</span>`;
                        } else {
                            return `<span class="file">${key}</span>`;
                        }
                    }).join('\n');
                    return `<pre>${content}</pre>`;
                } else {
                    return `<span class="error">ls: cannot access '${args[1] || '.'}': No such file or directory</span>`;
                }
            case "cd":
                const cdPath = resolvePath(args[1] || homeDir);
                const cdNode = getNode(cdPath);
                if (cdNode && cdNode.type === 'directory') {
                    currentPath = cdPath;
                    return '';
                } else {
                    return `<span class="error">cd: no such file or directory: ${args[1] || homeDir}</span>`;
                }
            case "pwd": return currentPath;
            case "cat":
                if (!args[1]) { return `<span class="error">cat: missing file operand</span>`; }
                const catPath = resolvePath(args[1]);
                const catNode = getNode(catPath);
                if (catNode && catNode.type === 'file') {
                    return `<pre>${catNode.content}</pre>`;
                } else if (catNode && catNode.type === 'directory') {
                    return `<span class="error">cat: ${args[1]}: Is a directory</span>`;
                } else {
                    return `<span class="error">cat: ${args[1]}: No such file or directory</span>`;
                }
            case "touch":
                if (!args[1]) { return `<span class="error">touch: missing file operand</span>`; }
                const touchPath = resolvePath(args[1]);
                const { parent: touchParent, name: touchName } = getParentNode(touchPath);
                if (touchParent && touchParent.type === 'directory' && !touchParent.children[touchName]) {
                    touchParent.children[touchName] = { type: 'file', content: '' };
                    return '';
                } else if (!touchParent) {
                    return `<span class="error">touch: cannot touch '${args[1]}': No such file or directory</span>`;
                }
                return '';
            case "mkdir":
                if (!args[1]) { return `<span class="error">mkdir: missing operand</span>`; }
                const mkdirPath = resolvePath(args[1]);
                const { parent: mkdirParent, name: mkdirName } = getParentNode(mkdirPath);
                if (mkdirParent && mkdirParent.type === 'directory' && !mkdirParent.children[mkdirName]) {
                    mkdirParent.children[mkdirName] = { type: 'directory', children: {} };
                    return '';
                } else if (!mkdirParent) {
                    return `<span class="error">mkdir: cannot create directory '${args[1]}': No such file or directory</span>`;
                } else {
                    return `<span class="error">mkdir: cannot create directory '${args[1]}': File exists</span>`;
                }
            case "rm":
                if (!args[1]) { return `<span class="error">rm: missing operand</span>`; }
                const rmPath = resolvePath(args[1]);
                const { parent: rmParent, name: rmName } = getParentNode(rmPath);
                if (rmParent && rmParent.children[rmName]) {
                    delete rmParent.children[rmName];
                    return '';
                } else {
                    return `<span class="error">rm: cannot remove '${args[1]}': No such file or directory</span>`;
                }
            case "skills": return `<pre>${config.skills.map(skill => `${skill.name.padEnd(10)} [${"#".repeat(Math.round(skill.level / 10)).padEnd(10)}] ${skill.level}%`).join("\\n")}</pre>`;
            case "projects": return `<pre>${config.projects.map(project => `\\n<a href="${project.link}" target="_blank">${project.name}</a>\\n- ${project.description}\\n`).join("")}</pre>`;
            case "github": window.open(config.links.github, "_blank"); return `Opening GitHub...`;
            case "theme":
                config.theme = config.theme === "dark" ? "light" : "dark";
                const colors = config.colors[config.theme];
                for (const [key, value] of Object.entries(colors)) {
                    document.documentElement.style.setProperty(`--${key}`, value);
                }
                return `Theme changed to ${config.theme}`;
            case "neofetch":
                let info = Object.entries(config.neofetch.info).map(([key, value]) => `<div><span class="commandName">${key.padEnd(12)}</span>: ${value}</div>`).join("");
                return `<div class="neofetchContainer"><pre>${config.neofetch.ascii}</pre><div>${info}</div></div>`;
            case "uname": return "Linux";
            case "hostname": return config.website;
            case "who": return config.owner;
            case "which":
                if (!args[1]) { return `<span class="error">which: missing argument</span>`; }
                const foundCmd = config.commands.find(c => c.name === args[1] || (c.aliases && c.aliases.includes(args[1])));
                if (foundCmd) {
                    return `/bin/${foundCmd.name}`;
                } else {
                    return `<span class="error">which: no ${args[1]} in (/bin)</span>`;
                }
            case "curl":
                if (!args[1]) { return `<span class="error">curl: missing url</span>`; }
                return `Sorry, but you can't use curl in this terminal, for security reasons.`;
            case "lscmds":
                return config.commands
                    .map(cmd => {
                        let cmdStr = `<span class="commandName">${cmd.name}</span>`;
                        if (cmd.aliases && cmd.aliases.length > 0) {
                            cmdStr += ` (aliases: ${cmd.aliases.join(', ')})`;
                        }
                        return `<div>${cmdStr}</div>`;
                    })
                    .join("");
            case "credit": return `This terminal was made by <a href="https://github.com/DailyScreen" target="_blank">DailyScreen</a>.`;
            case "run":
                if (!args[1]) { return `<span class="error">run: missing file operand</span>`; }
                const runPath = resolvePath(args[1]);
                const runNode = getNode(runPath);
                if (runNode && runNode.type === 'file') {
                    if (args[1].endsWith('.html')) {
                        const iframe = document.createElement('iframe');
                        iframe.srcdoc = runNode.content;
                        iframe.style.width = '100%';
                        iframe.style.height = '400px';
                        iframe.style.border = 'none';
                        return iframe.outerHTML;
                    } else {
                        return `<span class="error">run: cannot execute files with extension other than .html</span>`;
                    }
                } else {
                    return `<span class="error">run: file not found: ${args[1]}</span>`;
                }
        }
    };

    const handleCommand = async (cmdStr) => {
        const commands = cmdStr.split('|').map(cmd => cmd.trim());
        let input = '';
        let output = '';

        for (const command of commands) {
            output = await executeCommand(command, input);
            input = output;
        }

        const outputElement = document.createElement("div");
        outputElement.innerHTML = output;
        term.appendChild(outputElement);
    };

    const handleKeyDown = async (event) => {
        const inputField = event.target;
        if (event.key === "Enter") {
            event.preventDefault();
            const cmdStr = inputField.value.trim();

            const staticLine = document.createElement('div');
            staticLine.innerHTML = inputField.parentElement.innerHTML;
            staticLine.querySelector('.cmd-input').remove();
            staticLine.insertAdjacentHTML('beforeend', ` ${cmdStr}`);
            inputField.parentElement.replaceWith(staticLine);

            if (cmdStr !== "") {
                history.push(cmdStr);
                historyIndex = history.length;
                await handleCommand(cmdStr);
            }
            createInputLine();

        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                inputField.value = history[historyIndex];
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            if (historyIndex < history.length - 1) {
                historyIndex++;
                inputField.value = history[historyIndex];
            } else {
                historyIndex = history.length;
                inputField.value = "";
            }
        }
    };

    const init = () => {
        asciiArt.innerHTML = config.ascii;
        term.addEventListener('click', () => {
            const inputField = term.querySelector('.cmd-input');
            if (inputField) inputField.focus();
        });
        createInputLine();
    };

    init();
});
