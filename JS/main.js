// =============timer================
let timeLeft;
let id;
const timerResultEl = document.querySelector('.js-timer-result');
const startBtn = document.querySelector('.js-start-btn');
startBtn.addEventListener('click', function () {
    clearInterval(id);
    timeLeft = 61;   
id = setInterval(countdown, 1000); 
});
function countdown() {
    timeLeft -= 1;
    timerResultEl.innerHTML = `${timeLeft}&nbsp;<span>sec.</span>`;
    if (timeLeft < 1) {
        clearInterval(id);
    }
}

// =============text validation=================
const textRef = document.querySelector('.js-text');
function checkValidation(input) {
    const text = input.value;
    if (text.length < 2 || text.length > 5||text[0]==='я'||text[0]==='Я'||text.includes(' ')||text.includes('.')||text.includes(',')) {
    textRef.classList.add('wrong-text');
    } else {
    textRef.classList.remove('wrong-text');
    }
    if (text.length === 0) {
    textRef.classList.remove('wrong-text');
    }
}
// =============================================
let sideBarState = false;
const sideBarBtnEl = document.querySelector('.js-sidebar-icon');
const sideBarEl = document.querySelector('.js-sidebar');
const horizontalMenu = document.querySelector('.js-horizontal-menu');
sideBarBtnEl.addEventListener('click', function () {
    sideBarEl.classList.add('sidebar-visible');
    sideBarState = true;
});
sideBarEl.addEventListener('click', function () {
    if (sideBarState) {
        sideBarEl.classList.remove('sidebar-visible');
        sideBarState = false;
    }
});
window.addEventListener('resize', function () {
    const width = window.outerWidth;
    if (width < 700) {
        horizontalMenu.classList.add('_hidden');
        sideBarBtnEl.classList.remove('_hidden');
    } else {
        horizontalMenu.classList.remove('_hidden');
        sideBarBtnEl.classList.add('_hidden');
    }
});