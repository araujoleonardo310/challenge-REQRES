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
            <button class="button" id="button">Visite</button>            
        </div>
        `        
        divContainer.innerHTML = div + usuarios;
    });
}






