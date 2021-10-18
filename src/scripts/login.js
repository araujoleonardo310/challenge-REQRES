const api = 'https://reqres.in/api';

async function getValores() {

    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
      })

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    var dados = {
        email: email,
        password: password
    };

    const respose = await axios.post(`${api}/login`, dados)
    respose.then(function(respose){
        console.log("AAAAAAAAAA")

        if (respose.status !== 200) {
            var alerta = alert("Dados incorretos!");          
            return alerta 
        } else {
            var token = localStorage.setItem(respose.data.token)
            var url = window.location.href('../src/pages/users.html');
            return token, url
        };
    });        
};


