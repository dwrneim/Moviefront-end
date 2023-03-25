let regName = document.querySelector('#reg_name')
let regEmail = document.querySelector('#reg_email')
let regPass = document.querySelector('#reg_pass')
let regRepass = document.querySelector('#reg_re_pass')
// let enteranceReg = document.querySelector('.enterance_reg')
let enteranceGoLog = document.querySelector('.enterance_go_log')
let regErr = document.querySelector('.reg_err')

if(localStorage.getItem('loggedInUser')){
    window.location.href='../index.html'
}



function submitReg(e) {
    e.preventDefault()
    if (regName.value !== '' && regEmail.value !== '' && regPass.value !== '' && regRepass.value !== '') {
        let checkNewUser = users.find(data => data.email === regEmail.value)
        if (!checkNewUser) {
            if (regPass.value.length >= 8) {
                if (regRepass.value === regPass.value) {
                    const newUser = {
                        id: users.length + 1,
                        name: regName.value,
                        email: regEmail.value,
                        password: regPass.value
                    }
                    users.push(newUser)
                    localStorage.setItem('users', JSON.stringify(users))
                    regErr.innerHTML = 'Qeydiyyat ugurla bitdi'
                } else {
                    regErr.innerHTML = 'sifre eyni deyil'
                }
            }else{
                regErr.innerHTML='min 8 simvol'
            }

        } else {
            regErr.innerHTML = 'Bu istifadeci artiq movcuddur'
        }
    } else {
        regErr.innerHTML = 'Xanalari doldurun'
    }
}


enteranceGoLog.addEventListener('click', () => {
    window.location.href = '../login/login.html'
})