

let inputs = document.getElementsByClassName('input-form');
for (let input of inputs) {
    input.addEventListener("blur", function() {
        if(input.value.trim() != ""){
            input.classList.add("has-val");
        } else {
            input.classList.remove("has-val");
        }
    });
}




function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" || login == "bruno" && senha == "admin1234" || senha == "bruno"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}
