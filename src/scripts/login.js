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

    try {
        const response = await axios.post(`${api}/login`, dados)
        var token = response.data.token;
        localStorage.setItem("token", token);
        var url = '../pages/users.html';
        return window.location.href = url;

    } catch (error) {
        var alerta = alert("Dados incorretos!");          
            return alerta

    };

       
};
