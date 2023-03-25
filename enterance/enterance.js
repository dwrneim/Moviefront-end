let enteranceLogin = document.querySelector('.enterance_login')
let enteranceRegister = document.querySelector('.enterance_register')

// 
if(localStorage.getItem('loggedInUser')){
    window.location.href='../index.html'
}
enteranceLogin.addEventListener('click',()=>{
    console.log('uffuf');
    window.location.href='../login/login.html'
})
enteranceRegister.addEventListener('click',()=>{
    console.log('uffuf');
    window.location.href='../register/register.html'
})