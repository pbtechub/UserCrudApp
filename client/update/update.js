const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const city = document.getElementById('city');
const submitUser = document.getElementById('submitUser');

var getId = localStorage.getItem("updateId");
console.log(getId);


function getUser() {
  
    var xml = new XMLHttpRequest();
    xml.open('GET', 'http://localhost:5000/users', true)
    xml.onload = function () {
        if(this.status == 200) {
            
          let  usersData  = JSON.parse(this.responseText)

          const updateUser =  usersData.find((user) => user.id === getId)  
          
          firstName.value = updateUser.firstName;
          lastName.value = updateUser.lastName;
          phone.value = updateUser.phone;
          email.value = updateUser.email;
          city.value = updateUser.city;
        }
    }
    
    xml.send();
}

getUser()



const updateUser = () => {
    const updateObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value,
        city: city.value,
    }

    let updatedUser = JSON.stringify(updateObj)
    let xhr = new XMLHttpRequest()

    xhr.open('PUT', `http://localhost:5000/users/${getId}`, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

    
    xhr.onload = function () {
        if(xhr.status === 201) {
            console.log("Update successfully created!") 
        }
    }

    xhr.send(updatedUser);
    setTimeout(()=> {
        location.href = '../home/home.html'
    }, 1000)


    // fetch(`http://localhost:5000/users/${getId}`, {
    //     method: 'PUT',
    //     headers: {'Accept':'application/json, text/plain, */*',
    //                'Content-type': 'application/json' 

    //     },
    //     body: JSON.stringify(updateObj)
    // })
    // .then((res) => res.json())
    // .then((data) => console.log(data))


}


submitUser.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('123');
    updateUser()
    
})

