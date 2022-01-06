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

// function check() {
//     const Admin = localStorage.getItem("isAdmin",JSON.parse(isAdmin));
//     if (email.value === Admin) {
//         fetchdataAdmin();
//     }
//     else{
//         fetchdataUser();
//     }
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
        tbody.insertAdjacentHTML('afterbegin',html);
    })
    .catch(error => {
        console.log(error);
    });
}

// function fetchdataAdmin() {
//     fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw Error('ERROR');
//         }
//         return response.json();
//     })
//     .then(data => {
//         const html = data.results
//         .map(user => {
//             return `
//             <tr>
//                 <td>${user.name.title}</td>
//                 <td>${user.name.first}</td>
//                 <td>${user.name.last}</td>
//                 <td>${user.email}</td>
//                 <td>${user.gender}</td>
//                 <td>${user.gender}</td>
//                 <button id="modal">"EDIT"</button>
//             </tr>
//             `;
//         })
//         .join('');
//         tbody.insertAdjacentHTML('afterbegin',html);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

fetchdataUser();

// btn.addEventListener('click', () => {
//     check();
// })
