const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

const timeFormat = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" });
const dateFormat = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "short", day: "numeric" });

function tick() {
  const now = new Date();
  timeEl.textContent = timeFormat.format(now);
  timeEl.dateTime = now.toISOString();
  dateEl.textContent = dateFormat.format(now);
  setTimeout(tick, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()));
}

tick();
