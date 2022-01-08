const tbody = document.getElementById(`tbody`);
const btn = document.getElementById(`btn`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const url = `https://randomuser.me/api/?results=10`;
const container = document.getElementById('container');
const edit = document.getElementById('edit');
const modal_btn = document.getElementById(`modal-btn`)

const isAdmin = "@schoolofit";
localStorage.setItem('isAdmin', isAdmin);
const Admin = localStorage.getItem("isAdmin");


btn.addEventListener('click', () => {
    e.preventDefault();
    if (email.value === Admin) {
        fetchdataAdmin();
        container.style.display = "none";
        // edit.addEventListener('click',(e) =>{
        //     console.log("hllo world");
        //     editUser();
        // })
    }
    else {
        fetchdataUser();
        container.style.display = "none";
    }
})

// function editUser() {
//     const rows = document.getElementById(`row`);
//     console.log(rows);
// }


function fetchdataUser() {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error('ERROR');
        }
        return response.json();
    })
    .then(data => {
        const html = data.results
        .map(user => {
            return `
            <tr>
                <td>${user.name.title}</td>
                <td>${user.name.first}</td>
                <td>${user.name.last}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
            </tr>
            `;
        })
        .join('');
        tbody.innerHTML = html;
    })
    .catch(error => {
        console.log(error);
    });
}

function fetchdataAdmin() {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error('ERROR');
        }
        return response.json();
    })
    .then(data => {
        const html = data.results
        .map(user => {
            return `
            <tr id="row">
                <td>${user.name.title}</td>
                <td>${user.name.first}</td>
                <td>${user.name.last}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
                <td><button id="edit">"EDIT"</button></td>
                <td><button id="delete">"Delete"</button></td>
            </tr>
            `;
        })
        .join('');
        tbody.insertAdjacentHTML('afterbegin',html);
    })
    .catch(error => {
        console.log(error);
    });
}



// MODAL





