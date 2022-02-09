
let high = document.querySelector("header");
let bot = document.querySelector("footer");
let log = document.querySelector("section")
let sidebar = document.querySelector("aside");
let send = document.querySelector("send");
let content = document.querySelector("body")


function functionWaiter(){
    high.classList.remove("hidden");
    bot.classList.remove("hidden")
    log.classList.add("hidden");
}
function sendTo(){
    sidebar.classList.remove("hidden");
    content.classList.add("dark");
    high.classList.add("dark");
}