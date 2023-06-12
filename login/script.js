const button = document.querySelector('#button');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#form')
const spinner = document.querySelector('.lds-roller')

validFunc()
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    showSpinner()
});


function validFunc() {
        if ( emailInput.value.length === 0 || passwordInput.value.length === 0) {
        button.disabled = true;
    }   else if ( emailInput.value.length > 0 || passwordInput.value.length > 0) {
            button.disabled = false;
        }
}

function showSpinner() {
    spinner.style.display = "inline-block";
    setTimeout(locationPage, 2000)
}

function locationPage() {
    location.href = '..//my-profile/index.html'
}


