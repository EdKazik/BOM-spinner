const backBtn = document.querySelector('.button__back');
backBtn.addEventListener('click', goBack)

function goBack() {
    history.back()
}