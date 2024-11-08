const btnSignUp = document.getElementById('btnsignup')
// console.log(btnSignUp);

const divSignIn = document.querySelector('#signin')



const divSignUp = document.querySelector('#signup')

btnSignUp.addEventListener('click', moveElements)

const h3 = document.querySelector('h3')
const p = document.querySelector('p')
let flag = 0

function moveElements() {
  flag++
  if (flag % 2 != 0) {
    btnSignUp.textContent = 'Log In'
    h3.textContent = 'wellcome'
    p.textContent = 'To keep connected with us please login with your personal info'
  } else {
    btnSignUp.textContent = 'sign up'
    h3.textContent = 'Hello, Friend!'
    p.textContent = 'Enter your personal details and start journey with us !'
  }
  btnSignUp.classList.toggle('divback')
  divSignIn.classList.toggle('divgo')
  divSignUp.classList.toggle('divgo')
  divSignIn.classList.toggle('op0')
  divSignUp.classList.toggle('op1')
  h3.classList.toggle('divback')
  p.classList.toggle('divback')

}

/////////////////////////email error///////////////
const emailSignUpInput = document.querySelector('#emailsignup')
// console.log(emailSignUp);
const emailErrorShow = document.querySelector('.emailinp')
// console.log(emailErrorShow);

const i = document.querySelectorAll('i')
// console.log(i);


emailSignUpInput.addEventListener('input', (e) => {

  let temp = emailSignUpInput.value
  let count = 0
  if (e.target.value.search(/[ا-ی]/) >= 0) {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1)
  }
  if (temp.length >= 7) {
    count++
  } if (temp.search(/[0-9]/) >= 0) {
    count++
  } if (temp.search(/[a-z]/) >= 0) {
    count++
  } if (temp.search(/[A-Z]/) >= 0) {
    count++
  } if (temp.search(/[@#$%^&*]/) >= 0) {
    count++
  } if (temp.search(/[.]/) >= 0) {
    count++
  }
  // console.log(count);
  if (count == 6) {
    i[3].style.opacity = '1'
    emailErrorShow.textContent = ''
  } else {
    i[3].style.opacity = '0'
    emailErrorShow.textContent = 'length over 7 , 0-9 , A-Z , a-z , @ , . '
  }



})

///////////////////////username/////////////////////

const userSignUpInp = document.querySelector('#usersignup')
// console.log(userSignUpInp);


const userError = document.querySelector('.usererror')
// console.log(userError);

userSignUpInp.addEventListener('input', (e) => {
  let userSignUp = userSignUpInp.value
  if (e.target.value.search(/[ا-ی]/) >= 0) {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1)
  }
  if (userSignUp.length >= 5) {
    i[2].style.opacity = '1'
    userError.textContent = ""

  }

  else {

    i[2].style.opacity = '0'
    userError.textContent = "Enter at least 5 characters."
  }



})

/////////////////////////password//////////////

const passCode = document.getElementById('pass')
// console.log(password);

const hidden = document.querySelector('.hidden')
// console.log(hidden);
let temp = 0

hidden.addEventListener('click', () => {
  const type = passCode.type
  // console.log(temp);
  if (temp % 2 != 0) {
    hidden.children[0].style.opacity = '0'
    hidden.children[1].style.opacity = '1'
    passCode.setAttribute('type', 'password')
  } else {

    passCode.setAttribute('type', 'text')

    hidden.children[0].style.opacity = '1'
    hidden.children[1].style.opacity = '0'

  }
  temp++

})

const line = document.querySelector('.line')
// console.log(line);

const lineAwnser = document.querySelector('.lineanwser')
// console.log(lineAwnser);

passCode.addEventListener('input', (e) => {
  let pass = 0
  const passCodeInp = passCode.value
  passCodeInp.length >= 6 && pass++
  passCodeInp.search(/[A-Z]/) >= 0 && pass++
  passCodeInp.search(/[0-9]/) >= 0 && pass++
  passCodeInp.search(/[a-z]/) >= 0 && pass++
  if (e.target.value.search(/[ا-ی]/) >= 0) {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1)
  }
  // console.log(pass);

  switch (pass) {
    case 0:
      line.style.width = ''; line.style.background = '';
      lineAwnser.textContent = '';
      i[4].style.opacity = '0'
      break;
    case 1:
      line.style.width = '50px'; line.style.background = 'red';
      lineAwnser.textContent = 'poor';
      i[4].style.opacity = '0'

      break;
    case 2:
      line.style.width = '100px'; line.style.background = 'yellow';
      lineAwnser.textContent = 'Normal';
      i[4].style.opacity = '0'

      break;
    case 3:
      line.style.width = '150px'; line.style.background = 'blue';
      lineAwnser.textContent = 'Good';
      i[4].style.opacity = '0'

      break;
    case 4:
      line.style.width = '200px'; line.style.background = 'green';
      lineAwnser.textContent = 'Exellent';
      i[4].style.opacity = '1'

      break;


  }

})
/////////////////////////////////
const loginDetail = document.querySelector('.loginerror')
// console.log(loginDetail);

const btnUnderLine = document.querySelector('#btnunderline')
// console.log(btnUnderLine);

btnUnderLine.addEventListener('click', compelet)

function compelet() {
  const inps = document.querySelectorAll('input')
  let flag = 0
  if (inps[2].value.length >= 5) {
    // console.log('username : ok');
    flag++
  }
  if (inps[3].value.length >= 8 && inps[3].value.search(/@/) >= 0 && inps[3].value.search(/./) >= 0) {
    // console.log('email : ok');

    flag++
  }
  if (inps[4].value.search(/[A-Z]/) >= 0 && inps[4].value.search(/[0-9]/) >= 0 && inps[4].value.length >= 5) {
    // console.log('pass ok');
    flag++

  }

  // console.log(flag);

  if (flag == 3) {
    console.log('thanks');
    i[0].style.opacity = '1'
    i[1].style.opacity = '0'
    loginDetail.children[2].textContent = 'sign up successful!'
    loginDetail.children[2].style.color = 'green'
    i[0].style.color = 'green'
  } else {
    console.log('sorry');
    i[1].style.opacity = '1'
    i[0].style.opacity = '0'
    loginDetail.children[2].textContent = 'sign up failed!'
    loginDetail.children[2].style.color = 'red'
    i[1].style.color = 'red'

  }


}


///////////////////////////////log in//////////////////////////////////

const emailLogin=document.querySelector('#emaillogin')


emailLogin.addEventListener('input', (e) => {

  let temp = emailSignUpInput.value
  let count = 0
  if (e.target.value.search(/[ا-ی]/) >= 0) {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1)
  }
  if (temp.length >= 7) {
    count++
  } if (temp.search(/[0-9]/) >= 0) {
    count++
  } if (temp.search(/[a-z]/) >= 0) {
    count++
  } if (temp.search(/[A-Z]/) >= 0) {
    count++
  } if (temp.search(/[@#$%^&*]/) >= 0) {
    count++
  } if (temp.search(/[.]/) >= 0) {
    count++
  }
  // console.log(count);
  if (count == 6) {
    i[3].style.opacity = '1'
    emailErrorShow.textContent = ''
  } else {
    i[3].style.opacity = '0'
    emailErrorShow.textContent = 'length over 7 , 0-9 , A-Z , a-z , @ , . '
  }



})

////////////////////////////////////////////////////////////

const passLogin = document.querySelector('#passlogin')
passLogin.addEventListener('input',(e)=>{
  if (e.target.value.search(/[ا-ی]/) >= 0) {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1)}
})

const h6 = document.querySelector('h6')
const btnLogin = document.querySelector('#btnlogin')
// console.log(btnLogin);
btnLogin.addEventListener('click',login)
function login() {
  h6.innerHTML='Email or password invalid <br> sign up '
}