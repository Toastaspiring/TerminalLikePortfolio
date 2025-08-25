const config = {
    // -- GENERAL --
    // The name of the owner of the portfolio
    owner: "marecL",
    // The name of the website
    website: "profile",
    // The avatar to display. You can use a link to a local file or a URL.
    avatar: "https://i.redd.it/snoovatar/avatars/0fb22789-8e5c-4e12-93e4-06c2fbf4222e.png",
    // The ascii art to display.
    // You can use this website to generate ascii art: https://patorjk.com/software/taag/
    // and this website to convert it to a string: https://tools.knowledgewalls.com/convert-multiline-string-to-single-line
    ascii: "███╗   ███╗ █████╗ ██████╗ ███████╗ ██████╗  \n████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔════╝  \n██╔████╔██║███████║██████╔╝█████╗  ██║       \n██║╚██╔╝██║██╔══██║██╔══██╗██╔══╝  ██║       \n██║ ╚═╝ ██║██║  ██║██║  ██║███████╗╚██████╗ \n╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ",

    // -- THEME --
    // The theme of the terminal. You can choose between "dark" and "light".
    theme: "dark",
    // The colors of the terminal.
    // You can use any CSS color format (e.g. "red", "#ff0000", "rgb(255, 0, 0)")
    colors: {
        // Light theme colors
        light: {
            background: "#ffffff",
            text: "#000000",
            prompt: "rgb(240, 154, 74)",
            command: "rgb(255, 7, 7)",
        },
        // Dark theme colors
        dark: {
            background: "#000000",
            text: "#ffffff",
            prompt: "rgb(240, 154, 74)",
            command: "rgb(255, 7, 7)",
        },
    },

    // -- COMMANDS --
    // The commands to display in the help command.
    // The `name` is the command to type.
    // The `description` is the description of the command.
    // The `aliases` are alternative names for the command.
    commands: [
        {
            name: "help",
            description: "Display the available commands",
            aliases: ["h"],
        },
        {
            name: "skills",
            description: "Display my skills",
            aliases: ["s"],
        },
        {
            name: "projects",
            description: "Display my projects",
            aliases: ["p"],
        },
        {
            name: "clear",
            description: "Clear the terminal",
            aliases: ["c"],
        },
        {
            name: "github",
            description: "Open my github profile",
            aliases: ["gh"],
        },
        {
            name: "discord",
            description: "Display my discord username",
            aliases: ["ds"],
        },
        {
            name: "email",
            description: "Open my email",
            aliases: ["em"],
        },
        {
            name: "steam",
            description: "Open my steam profile",
            aliases: ["st"],
        },
        {
            name: "reddit",
            description: "Open my reddit profile",
            aliases: ["rd"],
        },
        {
            name: "webnovel",
            description: "Open my webnovel profile",
            aliases: ["wn"],
        },
    ],

    // -- LINKS --
    // The links to open when the user types the command.
    // The key is the name of the command.
    links: {
        github: "https://github.com/Dailyscreen",
        discord: "dailyscreen",
        email: "louismarec@outlook.com",
        steam: "https://steamcommunity.com/profiles/76561198838986536/",
        reddit: "https://www.reddit.com/user/Dsioul/",
        webnovel: "https://www.webnovel.com/profile/4316517291",
    },

    // -- SKILLS --
    // The skills to display when the user types the "skills" command.
    // The `name` is the name of the skill.
    // The `level` is the level of the skill (out of 100).
    skills: [
        {
            name: "HTML/EJS",
            level: 50,
        },
        {
            name: "CSS/SCSS",
            level: 30,
        },
        {
            name: "JS",
            level: 45,
        },
        {
            name: "PYTHON",
            level: 55,
        },
        {
            name: "NODE.JS",
            level: 45,
        },
        {
            name: "REACT.JS",
            level: 15,
        },
        {
            name: "LUA",
            level: 30,
        },
        {
            name: "C#",
            level: 60,
        },
    ],

    // -- PROJECTS --
    // The projects to display when the user types the "projects" command.
    // The `name` is the name of the project.
    // The `description` is the description of the project.
    // The `link` is the link to the project.
    projects: [
        {
            name: "PlexusFeed",
            description: "Modular, fast RSS agregator with his own proxy.",
            link: "https://github.com/DailyScreen/PlexusFeed",
        },
        {
            name: "TerminalLikePortfolio",
            description: "A personal website styled for UNIX terminal.",
            link: "https://github.com/DailyScreen/TerminalLikePortfolio",
        },
    ],
};
