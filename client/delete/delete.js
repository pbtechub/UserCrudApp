const deleteRecord = document.querySelector('.deleteRecord');
const cancelBtn = document.getElementById('cancelBtn');
const deleteUserBtn = document.getElementById('deleteUserBtn');
var getId = localStorage.getItem("deleteId");


function getUser() {
  
    var xml = new XMLHttpRequest();
    xml.open('GET', 'http://localhost:5000/users', true)
    xml.onload = function () {
        if(this.status == 200) {
            
          let  usersData  = JSON.parse(this.responseText)

          const deleteUser =  usersData.find((user) => user.id === getId)  
 
          deleteRecord.innerHTML = 
            `
            <div>
                <h4>${deleteUser.firstName} ${deleteUser.lastName}</h4>
                <h4>${deleteUser.phone}</h4>
                <h4>${deleteUser.email}</h4>
                <h4>${deleteUser.city}</h4>
          </div>
            `



            deleteUserBtn.addEventListener('click', () => {
                console.log('df87df8g');

                // let xhr = new XMLHttpRequest()

                // xhr.open('DELETE', `http://localhost:5000/users/${getId}`, true);
                // xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            
                
                // xhr.onload = function () {
                //     if(xhr.status === 201) {
                //         console.log("Update successfully created!") 
                //     }
                // }
            
                // xhr.send(deleteUser);


                fetch(`http://localhost:5000/users/${getId}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' 

                },
                body: JSON.stringify(deleteUser)
                })
                .then((res) => console.log('User deleted'))
                

                        })
                    
                    }
    }
    
    xml.send();
}

getUser()


cancelBtn.addEventListener('click', () => {
    console.log('df87df8g'); 
})




