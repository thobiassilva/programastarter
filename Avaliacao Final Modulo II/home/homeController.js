class StorageAdapter {
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    static removeItem(key) {
        localStorage.removeItem(key);
    }
}


var messagesTable = document.getElementById('messagesTable').getElementsByTagName('tbody')[0];
const username = sessionStorage.getItem('user');
let users = StorageAdapter.getItem('users');
let user;
let userUid;

for (let i = 0; i < users.length; i++) {
    if (username == users[i].username) {
        user = users[i];
        userUid = i;
        break;
    }
}

for (let x = 0; x < user.messages.length; x++) {
    console.log(user.messages[x]);
    let row = messagesTable.insertRow(messagesTable.rows.length);
    row.insertCell().innerHTML = x + 1;
    row.insertCell().innerHTML = user.messages[x].description;
    row.insertCell().innerHTML = user.messages[x].detail;
    row.insertCell().innerHTML = '<button type="button" class="btn btn-danger text-light me-2" data-bs-toggle="modal" data-bs-target="#deleteModal">Apagar</button><button type="button" class="btn btn-success text-light" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>';
}

function insert() {
    let description = document.getElementById('description').value;
    let detail = document.getElementById('detail').value;

    user.messages.push(new Message(description, detail));

    users[userUid] = user;

    StorageAdapter.setItem('users', users);

    let row = messagesTable.insertRow(messagesTable.rows.length);
    row.insertCell().innerHTML = messagesTable.rows.length;
    row.insertCell().innerHTML = description;
    row.insertCell().innerHTML = detail;
    row.insertCell().innerHTML = '<button type="button" class="btn btn-danger text-light me-2" data-bs-toggle="modal" data-bs-target="#deleteModal">Apagar</button><button type="button" class="btn btn-success text-light" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>';
}

function Message(_description, _detail) {
    this.description = _description;
    this.detail = _detail;
}

