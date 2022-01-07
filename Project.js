const tbody = document.getElementById(`tbody`);
const btn = document.getElementById(`btn`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const url = `https://randomuser.me/api/?results=10`;




const isAdmin = [
    {
        email: "@schoolofit",
        isAdmin: true
    }
];

localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
const Admin = localStorage.getItem("isAdmin",isAdmin);

email.addEventListener('input', () => 
check(email.value))

btn.addEventListener('click', (e) => {
    check();

})

function check(eValue) {
    console.log(eValue);
    if (Admin.includes(eValue)) {
        fetchdataAdmin();
    }
    else {
        fetchdataUser();
    }
}

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
        tbody.insertAdjacentHTML('afterbegin',html);
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
            <tr>
                <td>${user.name.title}</td>
                <td>${user.name.first}</td>
                <td>${user.name.last}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
                <td><button id="modal">"EDIT"</button></td>
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
