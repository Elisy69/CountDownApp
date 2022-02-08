import { format, getUnixTime, formatDistanceToNow } from "date-fns";

const UI = {
  startTime: document.querySelector(".input"),
  btnOk: document.querySelector(".OK"),
  endTime: document.querySelector(".timeresult"),
};

UI.btnOk.addEventListener("click", countDownTime);

function countDownTime() {
  const distanceTime = formatDistanceToNow(new Date(UI.startTime.value));
  console.log(distanceTime);
  UI.endTime.textContent = `... ${distanceTime}!`;
}
