//Modal đăng nhập, đăng kí
const registers = document.querySelectorAll('.js-register')
const logins = document.querySelectorAll('.js-login')
const formLogin = document.querySelector('.js-form-login')
const formRegister = document.querySelector('.js-form-register')
const modal = document.querySelector('.modal')
const modalBody = document.querySelector('.js-modal-body')
const user = document.querySelector('.js-button-login')
const userLogins = document.querySelectorAll('.js-user-login')
const account = document.querySelector('.header__navbar-item.header__navbar-user')
const backs = document.querySelectorAll('.js-button-return')

// Hàm hiện modal đăng ký 
function showRegister() {
    modal.classList.add('open')
    formLogin.classList.add('open')
    formRegister.classList.remove('open')
}

// Hàm hiên modal đăng nhậ
function showLogin() {
    modal.classList.add('open')
    formLogin.classList.remove('open')
    formRegister.classList.add('open')
    }

 // Hàm ẩn modal đăng ký, đăng nhập
function hideModal() {
    modal.classList.remove('open')
}

// hiện modal đăng ký
for (const register of registers) {
    register.onclick = showRegister
}

// hiện modal đăng nhập
for (const login of logins) {
    login.onclick = showLogin 
}

// Nghe hành vi click của button đăng ký
for (const userLogin of userLogins) {
    user.addEventListener('click', function() {
        modal.classList.remove('open')
        userLogin.classList.add('login')
        account.classList.add('account')
    })
}

// Nghe hành vi click vào button trở lại
for (const back of backs) {
    back.addEventListener('click', hideModal)
}

modal.addEventListener('click', hideModal)

modalBody.addEventListener('click', function (event) {
    event.stopPropagation(modalBody)
})

//Tăng, giảm số lượng sản phẩm
