const inp = document.querySelector("#inp")
const btn = document.querySelector("#btn")
const copy = document.querySelector("#copy")

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerCase = "qwertyuiopasdfghjklzxcvbnm"
const num = "1234567890"
const sym = "!@#$%^&*()_+=-~`:'"
const all = upperCase + lowerCase + num + sym


btn.addEventListener("click", function(){
    let password = ""
    for(let i = 1; i<=12; i++){
    password += all[Math.floor(Math.random()*all.length)]
    };
    inp.value = password
})

copy.addEventListener("click", function(){
    inp.select()
    document.execCommand("copy")
})