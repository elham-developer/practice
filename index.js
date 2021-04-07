let Name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let btn = document.getElementById("btn")
let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let h3 = document.getElementById("h3")

let data = {
    fname:null,
    email:null,
    phone:null,
}

btn.addEventListener('click',function(){
    data.fname = Name.value
    data.email = email.value
    data.phone = phone.value
    
    h1.innerText = data.fname
    h2.innerText = data.email
    h3.innerText = data.phone


})
