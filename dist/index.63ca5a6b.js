const startBtn = document.getElementById('start');
const settingsBtn = document.getElementById('settings');
const settingsInput = document.getElementById('settings-input');
const settingsForm = document.getElementById('settings-form');
const time1 = document.getElementById('time');
let timeRemaining = 15;
settingsBtn.addEventListener('click', (e)=>{
    settingsInput.classList.add('show');
    settingsInput.focus();
});
function setTime(time) {
    const [hours, seconds] = time.split(':');
    document.getElementsByClassName('time--minutes')[0].innerText = hours;
    document.getElementsByClassName('time--seconds')[0].innerText = seconds;
}
settingsForm.addEventListener('onsubmit', (e)=>{
    e.preventDefault();
});

//# sourceMappingURL=index.63ca5a6b.js.map
