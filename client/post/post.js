const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const city = document.getElementById('city');
const submitUser = document.getElementById('submitUser');
const homeLink = document.getElementById('homeLink');



const createUser = () => {
    const postObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value,
        city: city.value,
    }

    let newUser = JSON.stringify(postObj)
    let xhr = new XMLHttpRequest()

    xhr.open('POST', 'http://localhost:5000/users', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.send(newUser);

    setTimeout(()=> {
        location.href = '../home/home.html'
    }, 1000)
    

}


submitUser.addEventListener('submit', (e) => {
    e.preventDefault()
    createUser()  
})
