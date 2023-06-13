const backBtn = document.querySelector('.button__back');
backBtn.addEventListener('click', goBack)
console.log(screen)

function goBack() {
    history.back()
}