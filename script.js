//////////variaveis globais//////////
let high = document.querySelector("header");
let bot = document.querySelector("footer");
let log = document.querySelector("section");
let userName = document.querySelector(".name");
let loading = document.querySelector(".loading");
let send = document.querySelector("send");
let sendMessage = document.querySelector("footer input");
let middle = document.querySelector(".middle");
let sidebar = document.querySelector("aside");
let list = document.querySelector("ul");
let responseLoaded = null;
let higher = null;
let users = document.querySelector("users");

//////////validar o nome do usuário//////////
function checkName(){
    userName = userName.value;
    let name = {   
                name: userName
               }
    let promisse = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", name);
    
    promisse.then(displayChat);
    promisse.catch(reloadName);
}

//////////Nome não compatível//////////
function reloadName(erro){
    let statusCode = erro.response.status;
    alert(statusCode);
}

//////////sucesso no login//////////
function screenload(){
    loading.classList.remove("hidden");
    setTimeout(hiddenscreenload,3000);
}
function hiddenscreenload(){
    loading.classList.add("hidden");
}
function displayChat(){
    screenload();
    high.classList.remove("hidden");
    bot.classList.remove("hidden")
    log.classList.add("hidden");
    setInterval(loadMessages,3000);
}

//////////requisição das ultimas 100 mensagens na tela//////////
function loadMessages(){
    let promisse = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
    promisse.then(insertMessages);
}

//////////insere as mensagens no html//////////
function insertMessages(response){
    responseLoaded = response.data;
    list.innerHTML = "";
    let i = 0;
    responseLoaded.forEach(element => {
        let type = checkType(element);
        list.innerHTML += `<li id="${i}" class="area ${type}">
                            <p>
                            (${element.time}) 
                            <strong>${element.from}</strong>  
                            ${element.text}
                            </p>
                        </li>`;
                        i++;
    });
    scrollMessages();
    setInterval(keepConection, 5000);
    
}

//////////verifica e retorna o tipo de mensagem//////////
function checkType(element){
    if(element.type == "status"){
        return("status");
    }else if (element.type == "message"){
        return("message")
    }else if (element.type == "private_message"){
        return("private_message");
    }
}

//////////escrolar a pagina para a ultima mensagem enviada//////////
function scrollMessages(){
    let lastMessage = document.getElementById("99")
    lastMessage.scrollIntoView();
}


//////////manter o usuário conctado ao servidor//////////
function keepConection(){
    let request = axios.post("https://mock-api.driven.com.br/api/v4/uol/status",{name: userName})
}

//////////configurações da mensagem//////////
function settingsMessage(){
    sidebar.classList.remove("hidden");
    middle.classList.add("dark");
}

function exitSettings(){
    sidebar.classList.add("hidden");
    middle.classList.remove("dark")
}

//////////enviar mensagens//////////
function sendTo(){
    let message = {
        from: `${userName}`,
	    to: "todos",
	    text: `${sendMessage.value}`,
	    type: "message"
    }

    let request = axios.post("https://mock-api.driven.com.br/api/v4/uol/messages", message);
    request.then();
    request.catch(deuxabu);
}

function deuxabu(erro){
    alert("deu xabu");
}