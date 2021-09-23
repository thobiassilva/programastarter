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
let messagesTable = document.getElementById('messagesTable');

function onLoad() {
    const username = sessionStorage.getItem('user');
    let users = StorageAdapter.getItem('users');
    let messages = [];

    for (const user of users) {
        if (username == user.username) {
            messages = user.messages;
            break;
        }
    }

    for (let i = 0; i < messages.lenght; i++) {
        messagesTable.insertRow(i).insertCell(i).innerHTML = 'NEW CELL';
    }
}



function insert() {
    let description = document.getElementById('description').value;
    let detail = document.getElementById('detail').value;


}

