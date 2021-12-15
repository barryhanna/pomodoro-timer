const root = document.querySelector(':root');
const startBtn = document.getElementById('start');
const settingsBtn = document.getElementById('settings');
const settingsInput = document.getElementById('settings-input');
const settingsForm = document.getElementById('settings-form');
const time1 = document.getElementById('time');
const okSettingsBtn = document.getElementById('ok-btn');
const timeInput = document.getElementById('timeInput');
const startBtnText = document.getElementsByClassName('btn-text')[0];
const btnTimerCompletedIcon = document.getElementsByClassName('btn-timer-completed-icon')[0];
let totalTime = 900;
let timeRemaining = totalTime;
settingsBtn.addEventListener('click', (e)=>{
    settingsInput.classList.add('show');
    settingsInput.focus();
});
function setTime(time) {
    const [hours, seconds] = time.split(':');
    document.getElementsByClassName('time--minutes')[0].innerText = hours;
    document.getElementsByClassName('time--seconds')[0].innerText = seconds.padStart(2, 0);
}
function update() {
    timeRemaining += -1;
    if (timeRemaining <= 0) {
        stopTimer();
        timeOver();
        setTime(`${totalTime / 60}:00`);
        return;
    }
    setTime(formatTime(timeRemaining));
    updateCircle();
}
function timeOver() {
    root.style.setProperty('--clr-circle', 'var(--clr-green)');
    root.style.setProperty('--var-time-passed', '100%');
    startBtnText.style.display = 'none';
    btnTimerCompletedIcon.style.display = 'block';
}
function updateCircle() {
    const percentDone = timeRemaining / totalTime * 100;
    setCircle(percentDone);
}
function setCircle(percentDone) {
    root.style.setProperty('--var-time-passed', `${percentDone}%`);
}
function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    console.log(`${minutes}:${seconds}`);
    return `${minutes}:${seconds}`;
}
let timer;
function startTimer() {
    timer = setInterval(()=>update()
    , 1000);
    toggleStopStartButton();
}
function stopTimer() {
    clearInterval(timer);
    toggleStopStartButton();
}
function resetTime(initial = 15) {
    totalTime = initial;
    timeRemaining = totalTime;
}
function toggleStopStartButton() {
    if (startBtn.innerText === 'Start') {
        startBtn.innerText = 'Stop';
        startBtn.removeEventListener('click', startTimer);
        startBtn.addEventListener('click', stopTimer);
    } else {
        startBtn.innerText = 'Start';
        startBtn.removeEventListener('click', stopTimer);
        startBtn.addEventListener('click', startTimer);
    }
}
startBtn.addEventListener('click', startTimer);
settingsForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    resetTime(timeInput.value * 60);
    setTime(`${timeInput.value}:00`);
    settingsInput.classList.remove('show');
});

//# sourceMappingURL=index.63ca5a6b.js.map
