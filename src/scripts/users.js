const api = 'https://reqres.in/api/users?page=2';
const divContainer = document.querySelector(".container-users");


const GetUsers = async () => {
    var responseUsers = await axios.get(`${api}`);
    ListUsers(responseUsers.data.data)                    
}

GetUsers();

function ListUsers(item) {
    var div = document.createElement('div');    
    div =
    `
    <div class="users-title">
        <p class="title"><i class="fas fa-users"></i>Usuários</p>     
    </div>      
    `
    let usuarios = "";
    item.forEach(element => {
        const name = `${element.first_name} ${element.last_name}`;        
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

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Nova mensagem'
  modalBodyInput.value = recipient
})




