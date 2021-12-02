const startBtn = document.getElementById('start');
const settingsBtn = document.getElementById('settings');
const settingsInput = document.getElementById('settings-input');
const settingsForm = document.getElementById('settings-form');
const time = document.getElementById('time');
const okSettingsBtn = document.getElementById('ok-btn');
const timeInput = document.getElementById('timeInput');

let timeRemaining = 2 * 60;

settingsBtn.addEventListener('click', (e) => {
  settingsInput.classList.add('show');
  settingsInput.focus();
});

function setTime(time) {
  const [hours, seconds] = time.split(':');
  document.getElementsByClassName('time--minutes')[0].innerText = hours;
  document.getElementsByClassName('time--seconds')[0].innerText = seconds;
}

function update() {
  timeRemaining += -1;
  setTime(formatTime(timeRemaining));
}

function formatTime(timeInSeconds) {
  // 3600 secs per hour
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  console.log(`${minutes}:${seconds}`);
  return `${minutes}:${seconds}`;
}

function startTimer() {
  return setInterval(() => update(), 1000);
}

startBtn.addEventListener('click', () => startTimer());

settingsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  setTime(`${timeInput.value}:00`);
  settingsInput.classList.remove('show');
});
