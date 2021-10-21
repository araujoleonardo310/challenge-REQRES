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
        return alerta;

    };
};

const GetUsers = async () => {
    var responseUsers = await axios.get(`${api}/users?page=2`);
    ListUsers(responseUsers.data.data);
}

GetUsers();

function ListUsers(item) {
    const divContainer = document.querySelector(".container-users");
    var div = document.createElement('div');
    div =
        `
    <div class="users-title">
        <p class="title"><i class="fas fa-users"></i>Usuários</p>     
    </div>      
    `
    let usuarios = "";
    item.forEach(element => {
        usuarios +=
            `
        <div class="users">
            <div class="users-profile">
                <img src="${element.avatar}" alt="" class="photo">
                <div class="users-name_email">
                    <p class="name">${element.first_name} ${element.last_name}</p>
                    <p class="email">${element.email}</p>
                </div>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@${element.email}">Enviar @${element.first_name}</button>          
        </div>
        `
        divContainer.innerHTML = div + usuarios;
    })
}

var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var recipient = button.getAttribute('data-bs-whatever');
    var modalTitle = exampleModal.querySelector('.modal-title');
    var modalBodyInput = exampleModal.querySelector('.modal-body input');

    modalTitle.textContent = 'Nova mensagem';
    modalBodyInput.value = recipient;
})
