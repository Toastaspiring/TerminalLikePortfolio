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
    ascii: `
    d8888b.  .d8b.  d8888b. d88888b d8888b. d88888b  .d88b.  db    db
    88  '8D d8' '8b 88  '8D 88'     88  '8D 88'     .8P  Y8. '8b  d8'
    88   88 88ooo88 88oobY' 88ooooo 88oobY' 88ooooo 88    88  '8bd8'
    88   88 88~~~88 88'b..  88~~~~~ 88'b..  88~~~~~ 88    88    88
    88  .8D 88   88 88'  YD. 88.     88'  YD. 88.     '8b  d8.   88
    Y8888D' YP   YP 88'   YD Y88888P 88'   YD Y88888P  'Y88P'    YP
    `,

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
        {
            name: "theme",
            description: "Change the theme of the terminal",
            aliases: ["th"],
        },
        {
            name: "neofetch",
            description: "Display system information",
            aliases: ["nf"],
        },
    ],

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
            ....

        `,
        info: {
            "OS": "Arch Linux",
            "Host": "Portfolio v1.0",
            "Kernel": "6.1.12-arch1-1",
            "Uptime": "1 day, 2 hours, 34 minutes",
            "Packages": "1 (npm)",
            "Shell": "bash",
            "Resolution": "1920x1080",
            "DE": "Portfolio",
            "WM": "Terminal",
            "Theme": "gruvbox-dark",
            "Icons": "Papirus-Dark",
            "Terminal": "Portfolio",
            "CPU": "Intel i7-11800H @ 4.60GHz",
            "GPU": "NVIDIA GeForce RTX 3070",
            "Memory": "16GiB / 32GiB",
        }
    },

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
