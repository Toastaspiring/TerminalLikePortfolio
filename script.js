window.addEventListener("DOMContentLoaded", function () {
    const term = {
        main: document.getElementById("terminal"),
        mainInfo: document.getElementById("mainInfo"),
        output: document.getElementById("output"),
        input: document.getElementById("input"),
        cmd: document.getElementById("cmd"),
        prompt: document.getElementById("prompt"),
        suggestions: document.getElementById("suggestions"),
        helpCmdList: document.getElementById("helpCmdList"),
        avatar: document.querySelector(".avatar"),
        owner: document.querySelector(".ownerTerminal"),
        ascii: document.querySelector("pre"),
    };

    let currentSuggestionIndex = -1;

    const init = () => {
        applyTheme();

        // set the owner
        term.owner.innerHTML = `<b>${config.owner}@${config.website}</b>`;

        // set the ascii art
        term.ascii.innerHTML = config.ascii;

        // set the avatar
        term.avatar.src = config.avatar;

        // set the prompt
        term.prompt.innerHTML = `<span class="ownerTerminal"><b>${config.owner}@${config.website}</b></span><b>:~$</b>`;

        // set the suggestions
        const suggestions = config.commands.map((cmd) => cmd.name);
        window.suggestions = suggestions;

        // set the help command
        const helpCmd = config.commands
            .map(
                (cmd) =>
                    `<span><span class="commandName">${cmd.name}</span> - ${
                        cmd.description
                    } ${
                        cmd.aliases
                            ? `(aliases: ${cmd.aliases.join(", ")})`
                            : ""
                    }</span><br />`
            )
            .join("");
        term.helpCmdList.innerHTML = helpCmd;

        term.cmd.focus();
        term.cmd.addEventListener("keypress", onEnter);
    };

    const onEnter = (e) => {
        if (e.keyCode === 13) {
            const cmd = term.cmd.value.trim();
            if (cmd !== "") {
                term.output.innerHTML += `<div><span class="ownerTerminal"><b>${config.owner}@${config.website}</b></span><b>:~$</b> ${cmd}</div>`;
                term.cmd.value = "";
                handleCommand(cmd);
                term.output.scrollTop = term.output.scrollHeight;
            }
        }
    };

    const type = async (text, element) => {
        for (let i = 0; i < text.length; i++) {
            element.innerHTML += text.charAt(i);
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
    };

    const handleCommand = async (cmd) => {
        const command = config.commands.find(
            (c) => c.name === cmd || (c.aliases && c.aliases.includes(cmd))
        );
        const outputElement = document.createElement("div");
        term.output.appendChild(outputElement);

        if (command) {
            switch (command.name) {
                case "help":
                    await type(term.helpCmdList.innerHTML, outputElement);
                    break;
                case "skills":
                    await type(getSkills(), outputElement);
                    break;
                case "projects":
                    await type(getProjects(), outputElement);
                    break;
                case "clear":
                    term.output.innerHTML = "";
                    term.mainInfo.innerHTML = "";
                    break;
                case "github":
                    window.open(config.links.github, "_blank");
                    break;
                case "discord":
                    await type(config.links.discord, outputElement);
                    break;
                case "email":
                    window.location.href = `mailto:${config.links.email}`;
                    break;
                case "steam":
                    window.open(config.links.steam, "_blank");
                    break;
                case "reddit":
                    window.open(config.links.reddit, "_blank");
                    break;
                case "webnovel":
                    window.open(config.links.webnovel, "_blank");
                    break;
                case "theme":
                    toggleTheme();
                    await type(`Theme changed to ${config.theme}`, outputElement);
                    break;
                case "neofetch":
                    await type(getNeofetch(), outputElement);
                    break;
            }
        } else {
            await type(`command not found: ${cmd}`, outputElement);
        }
    };

    const applyTheme = () => {
        const theme = config.theme;
        const colors = config.colors[theme];
        for (const [key, value] of Object.entries(colors)) {
            document.documentElement.style.setProperty(`--${key}`, value);
        }
    };

    const toggleTheme = () => {
        config.theme = config.theme === "dark" ? "light" : "dark";
        applyTheme();
    };

    const getSkills = () => {
        let skills = "";
        config.skills.forEach((skill) => {
            skills += `${skill.name.padEnd(10)} [${"#".repeat(
                skill.level / 10
            ).padEnd(10)}] ${skill.level}%\n`;
        });
        return `<pre>${skills}</pre>`;
    };

    const getProjects = () => {
        let projects = "";
        config.projects.forEach((project) => {
            projects += `\n<a href="${project.link}" target="_blank">${
                project.name
            }</a>\n- ${project.description}\n`;
        });
        return projects;
    };

    const getNeofetch = () => {
        let neofetch = "<pre>";
        neofetch += config.neofetch.ascii;
        neofetch += "</pre>";
        neofetch += "<div>";
        for (const [key, value] of Object.entries(config.neofetch.info)) {
            neofetch += `<div><span class="commandName">${key}</span>: ${value}</div>`;
        }
        neofetch += "</div>";

        return `<div class="neofetchContainer">${neofetch}</div>`;
    };

    init();
});

function showSuggestions() {
    let n = document.getElementById("cmd"),
        e = n.value.trim(),
        s = document.getElementById("suggestions");
    var i;
    (s.innerHTML = "") !== e &&
        ((i = suggestions.filter(function (n) {
            return n.startsWith(e);
        })).forEach(function (e, i) {
            var l = document.createElement("div");
            (l.textContent = e),
                l.addEventListener("click", function () {
                    (n.value = e), (s.innerHTML = "");
                }),
                s.appendChild(l);
        }),
        0 < i.length)
        ? n.classList.add("command-entered")
        : n.classList.remove("command-entered");
}
function handleKeyDown(n) {
    var e,
        s = document.getElementById("suggestions"),
        i = s.getElementsByTagName("div");
    "ArrowUp" === n.key
        ? (n.preventDefault(),
          0 < currentSuggestionIndex && currentSuggestionIndex--)
        : "ArrowDown" === n.key
        ? (n.preventDefault(),
          currentSuggestionIndex < i.length - 1 && currentSuggestionIndex++)
        : "Enter" === n.key &&
          ((n = document.getElementById("cmd")),
          (e = i[currentSuggestionIndex]) && (n.value = e.textContent),
          (s.innerHTML = ""),
          n.classList.remove("command-entered"));
    for (let n = 0; n < i.length; n++) {
        var l = i[n];
        n === currentSuggestionIndex
            ? l.classList.add("selected")
            : l.classList.remove("selected");
    }
}
  