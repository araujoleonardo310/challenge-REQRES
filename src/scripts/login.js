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

    const response = await axios.post(`${api}/login`, dados);
    console.log(response.status)
     
    if (response.status === 200) {
        var token = response.token;
        localStorage.setItem("token", token);
        var url = '../src/pages/users.html';
        return window.location.href(url) 

    } else {
                
        var alerta = alert("Dados incorretos!");          
        return alerta
    };
        
      
};


