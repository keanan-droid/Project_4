const tbody = document.getElementById(`tbody`);
const btn = document.getElementById(`btn`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const result = `https://randomuser.me/api/?results=10`;

localStorage.setItem('email', '@schoolofit');
let isAdmin = false;

// btn.addEventListener(`click`,(e) =>{
//     e.preventDefault();
//     if (email.value === '@schoolofit') {
//         isAdmin = true;
//     } else {
//         isAdmin = false;
//     }
// })


fetch(result, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
       console.log(data);
        for (let i = 0; i < data.length; i++) {
            const temp = `
                <tr>
                    <td>${data[i].tilte}</td>
                    <td>${data[i].first}</td>
                    <td>${data[i].last}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].gender}</td>
                </tr>
            `;
    
            tbody.innerHTML += temp;
            }
        })
        .catch((error) => {
        console.log(error);
    });




