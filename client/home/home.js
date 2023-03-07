const userList = document.getElementById('userList');
const editBtn = document.querySelectorAll('.editBtn');
const deleteBtn = document.getElementById('delete');





function getUser() {
  
    var xml = new XMLHttpRequest();
    xml.open('GET', 'http://localhost:5000/users', true)
    xml.onload = function () {
        if(this.status == 200) {
            // console.log(this.responseText);
          let  usersData  = JSON.parse(this.responseText)
        getUsers(usersData)
       
            
         
        }
    }
    
    xml.send();
}

getUser()


const getUsers = (usersData) => {
    const listUser = usersData.map((user, idx) => {

        let tableTr = document.createElement('tr');

        tableTr.setAttribute('class', 'rowData')
        tableTr.setAttribute('id', user.id)
        let tableSl = document.createElement('td');
        let tableFirstName = document.createElement('td');
        let tableLastName = document.createElement('td');
        let tablePhone = document.createElement('td');
        let tableEmail = document.createElement('td');
        let tableCity = document.createElement('td');
        let tableEditDelete = document.createElement('td');
       
        tableSl.innerHTML = idx + 1;
        tableFirstName.innerHTML = user.firstName;
        tableLastName.innerHTML = user.lastName;
        tablePhone.innerHTML = user.phone;
        tableEmail.innerHTML = user.email;
        tableCity.innerHTML = user.city;

        tableEditDelete.innerHTML = `
                        <a href="/client/update/update.html" class="btn editBtn" id="edit">Edit</a>
                        <span>/</span>
                        <a href="/client/delete/delete.html" class="btn deleteBtn" id="delete">Delete</a> 
                             `

        tableTr.appendChild(tableSl)
        tableTr.appendChild(tableFirstName)
        tableTr.appendChild(tableLastName)
        tableTr.appendChild(tablePhone)
        tableTr.appendChild(tableEmail)
        tableTr.appendChild(tableCity)
        tableTr.appendChild(tableEditDelete)

        userList.appendChild(tableTr);


    }
            
    )

}


userList.addEventListener('click', (e) => {
    if(e.target.classList.contains('editBtn')) {
        console.log((e.target.parentNode.parentNode.id));

        const getId = e.target.parentNode.parentNode.id;

        localStorage.setItem("updateId", getId);
    }
    
})

userList.addEventListener('click', (e) => {
    if(e.target.classList.contains('deleteBtn')) {
        console.log((e.target.parentNode.parentNode.id));

        const getId = e.target.parentNode.parentNode.id;

        localStorage.setItem("deleteId", getId);
    }
    
})






