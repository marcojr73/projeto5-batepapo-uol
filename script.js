
let high = document.querySelector("header");
let bot = document.querySelector("footer");
let log = document.querySelector("section")
let sidebar = document.querySelector("aside");
let send = document.querySelector("send");
let middle = document.querySelector(".middle")


function displayChat(){
    high.classList.remove("hidden");
    bot.classList.remove("hidden")
    log.classList.add("hidden");
}
function sendTo(){
    sidebar.classList.remove("hidden");
    middle.classList.add("dark");
}