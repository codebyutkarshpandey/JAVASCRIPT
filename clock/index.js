const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    ampm = "PM";
  }

  if (h > 12) {
    h = h - 12;
  }

  if (h === 0) {
    h = 12;
  }

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
}

setInterval(updateClock, 1000); //har 1 sec pr function call karega
updateClock(); // page reload karne pr function call karega 

