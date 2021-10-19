const api = 'https://reqres.in/api';
document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault(), getValores();
})

async function getValores() {   

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    var dados = {
        email: email,
        password: password
    };

    await axios.post(`${api}/login`, dados).then(function(response){
        return ValidacaoResponse(response)
    });
};

function ValidacaoResponse(response){

    if (response.status === 200) {
        var token = response.data.token;
        localStorage.setItem("token", token);
        var url = '../pages/users.html';
        return window.location.href = url 

    } else if (response.status !== 200){                
        var alerta = alert("Dados incorretos!");          
        return alerta
    };       

}


