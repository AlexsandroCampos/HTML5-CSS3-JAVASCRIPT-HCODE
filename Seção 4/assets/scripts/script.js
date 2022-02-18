
document.querySelector("#form-login").addEventListener("submit", e =>{
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let json = {
        email: email,
        password: password
    }

    /*
    let stringJason = JSON.stringify(jason);
    let jsonParse = JSON.parse(stringJason);
    console.log(jason);
    console.log(stringJason);
    console.log(jsonParse);
    */

    if(!json.email){
        console.error("Campo e-mail deve ser preenchido!")
    } 
    else if(!json.password){
        console.error("Campo password deve ser preenchido!")
    }
    else{
        console.info("Dados validados com sucesso.")
    }
});

