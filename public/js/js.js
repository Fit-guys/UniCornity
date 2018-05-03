function handleChange() {
    document.getElementById("close").click=onClose;
    document.getElementById("button").click=come;
}

function onClose(){
    document.getElementById("login-page").style.display = "none";
    document.getElementById("dark").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("reg").textContent = "";
}
function registration(){
    document.getElementById("login-page").style.display = "block";
    document.getElementById("dark").style.display = "block";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("reg").innerText = "Реєстрація";
}
function login(){
    document.getElementById("login-page").style.display = "block";
    document.getElementById("dark").style.display = "block";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("reg").innerText = "Авторизуватись";
}
function come() {
    window.open('video.html', 'test', 'fullscreen=yes');
}