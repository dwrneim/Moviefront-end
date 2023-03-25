let loginEmail =document.querySelector('#login_email')
let loginPass =document.querySelector('#login_pass')
let loginErr =document.querySelector('.login_err')
let enteranceGoReg =document.querySelector('.enterance_go_reg')

if(localStorage.getItem('loggedInUser')){
    window.location.href='../index.html'
}

function submitLogin(e){
    e.preventDefault()
    if(loginEmail.value!=='' && loginPass.value!==''){
        let checkUser=users.find(data=>data.email===loginEmail.value)
        if(checkUser){
            if(checkUser.password===loginPass.value){
                window.location.href='../index.html'
                localStorage.setItem('loggedInUser',JSON.stringify(checkUser))
            }else{
                loginErr.innerHTML='sefre yanlisdir'
            }
        }else{
            loginErr.innerHTML='email tapilmadi'

        }
    }else{
        loginErr.innerHTML='Xanalari doldurun'
    }
}
enteranceGoReg.addEventListener('click',() => {
    window.location.href='../register/register.html'
})