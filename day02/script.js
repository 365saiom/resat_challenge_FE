let minutes = 0;
let seconds = 0;
let tenMillis = 0;

const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");
let intervalId;

/* start 버튼 클릭 시 setInterval 작동 */
btnStart.onclick = function () {
  /* start 버튼이 클릭 될 때 마다 intervalId를 최신화한다. */
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
};

btnStop.onclick = function () {
  clearInterval(intervalId);
};

btnReset.onclick = function () {
  clearInterval(intervalId);
  tenMillis = 0;
  seconds = 0;
  minutes = 0;
  appendTens.textContent = "00";
  appendSeconds.textContent = "00";
  appendMinutes.textContent = "00";
};

function operateTimer() {
  tenMillis++;
  appendTens.textContent = tenMillis;
  if (tenMillis > 99) {
    seconds++;
    /* seconds값을 화면에 보이도록 textContent 값 연동하기 */
    /* seconds값 두자리 수로 보이도록 삼항연산자 작성 */
    appendSeconds.textContent = seconds > 9 ? seconds : "0" + seconds;
    tenMillis = 0;
    appendTens = "00";
  }
  if (seconds > 59) {
    minutes++;
    /* minutes값을 화면에 보이도록 textContent 값 연동하기 */
    /* minytes값 두자리 수로 보이도록 삼항연산자 작성 */

    appendMinutes.textContent = minutes > 9 ? minutes : "0" + minutes;
    seconds = 0;
    appendSeconds = "00";
  }
}
