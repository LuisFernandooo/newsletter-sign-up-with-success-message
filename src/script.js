const email = document.querySelector('#email');
const error = document.querySelector('#error-email');
const conSubscribe = document.querySelector('.container-subscribe');
const conThanks = document.querySelector('.container-thanks');
const span = document.querySelector('.container-thanks p span')


document.querySelector('.form button').addEventListener('click', function(){
    if(!email.checkValidity()){
        error.innerHTML = "Valid email required";
        email.classList.add('errorEmail');
    }

    else if(email.value == ""){
        error.innerHTML = "Valid email required";
    }

    else{
        conSubscribe.classList.add('hidden');
        conThanks.classList.remove('hidden');
    }

    span.innerHTML = email.value;
})

document.querySelector('.container-thanks button').addEventListener('click', function(){
    conSubscribe.classList.remove('hidden');
    conThanks.classList.add('hidden');
})

function redefinirMsg(){
    if(error.innerHTML = "Valid email required"){
        error.innerHTML = "";
        email.classList.remove('errorEmail');
    }
}