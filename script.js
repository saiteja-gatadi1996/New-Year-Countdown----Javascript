const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
//we want the next year time, so that is why +1
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//Set background year
year.innerText = currentYear + 1;

updateCountdown();

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  //Example Calcs
  console.log(`this gives value in milliseconds ${diff}`);
  console.log(`this gives value in seconds ${diff / 1000}`);
  console.log(`this gives value in minutes ${diff / 1000 / 60}`);
  console.log(`this gives value in hours ${diff / 1000 / 60 / 60}`);
  console.log(`this gives value in days ${diff / 1000 / 60 / 60 / 24}`);

  // adding % shows up how much is remaining in hours, minutes, seconds
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

//Show spinner before countdown, for one sec the spinner is shown then style property is assigned
setTimeout(() => {
  //initially we don't have countdown displayed
  //remove spinner after 1 second
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

//runs for every 1 sec
setInterval(updateCountdown, 1000);
