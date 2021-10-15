const api = 'https://reqres.in/api';

const submit = document.getElementById('submit');
submit.addEventListener("click", getValores);
async function getValores() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    var data = {
        email: email,
        password: password
    };   

    await axios.post(`${api}/login`, data)

    
}
