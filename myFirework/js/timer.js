let congoSVG = document.querySelector("#congo");
let taskDate = document.querySelector(".date");
let taskMonth = document.querySelector(".month");
let taskYear = document.querySelector(".year");
let timerSection = document.querySelector("#timer-section");
// let confettiCanvas = document.getElementById("confetti");


// let confettiSection = document.getElementById("confetti-section");
let confettiSection = document.querySelector(".fireworkDiv");




let revCountDown = document.querySelector("#revCountDown")

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  // here we set our deadline/task date
  let TDate = 1;
  let TMonth = 7;
  let TMonthName = months[TMonth - 1];
  let TYear = 2023;
  let time = "03:47:20";
  let deadline = new Date(`${TMonthName} ${TDate} ${TYear} ${time}`);

// today date and time
const currentDate = new Date();

const currentTime = currentDate.getHours() * (1000 * 60 * 60) + currentDate.getMinutes() * (1000 * 60) + currentDate.getSeconds() * 1000;
let deadlineTime = deadline.getHours() * (1000 * 60 * 60) + deadline.getMinutes() * (1000 * 60) + deadline.getSeconds() * 1000;

// show confetti when date and month matched
function showConfetti() {
  if (deadline.getDate() === currentDate.getDate() && deadline.getMonth() + 1 === currentDate.getMonth() + 1 && (deadlineTime-currentTime) <= 0) {
    //show confetti and hide timer

    // // Call the function to show different confetti at different time interval
    // confettiInterval();

    // // Call the function every 82 seconds
    // const repeatConfetti = setInterval(() => {
    //   confettiInterval();
    //   // }, 86.4 * 1000);
    // }, 190.08 * 1000);

    timerSection.classList.add("hidden");
    // confettiCanvas.classList.remove("hidden");


    confettiSection.classList.remove("hidden");
  

} else {
    //hide confetti and show timer
    timerSection.classList.remove("hidden");
    // confettiCanvas.classList.add("hidden");
    confettiSection.classList.add("hidden");
  }
}
showConfetti();

function getValues() {
  if (deadline - currentDate <= 0 && deadlineTime - currentTime <= 0) {
    deadline.setFullYear(currentDate.getFullYear() + 1);
  } else if (deadline - currentDate <= 0 ) {
    deadline.setFullYear(currentDate.getFullYear());
  }

  resetTimer();
}

const resetTimer = () => {
  TDate = deadline.getDate();
  TMonth = deadline.getMonth() + 1;
  TYear = deadline.getFullYear();
  TMonthName = months[TMonth - 1];
  time = `${deadline.getHours()}:${deadline.getMinutes()}:${deadline.getSeconds()}`;

  // show deadline/task date on HTML page
  taskDate.innerHTML = TDate;
  taskMonth.innerHTML = TMonth;
  taskYear.innerHTML = TYear;

  // deadline time in milliseconds
  const newDate = new Date(`${TMonthName} ${TDate} ${TYear} ${time}`).getTime();

  const countdown = setInterval(() => {
    const date = new Date().getTime(); // current time in milliseconds

    const diff = newDate - date;
    // console.log("diff", diff);

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysdiff = diff / (1000 * 60 * 60 * 24);
    const remainingWeeks = parseInt(daysdiff / 7);
    const remainingDays = parseInt(daysdiff % 7);

    document.querySelector(".weeks").innerHTML = remainingWeeks < 10 ? "0" + remainingWeeks : remainingWeeks;
    document.querySelector(".days").innerHTML = remainingDays < 10 ? "0" + remainingDays : remainingDays;
    document.querySelector(".hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if(remainingWeeks<=0 && remainingDays<=0 && hours<=0 && minutes<=0 && seconds<=10){
      timerSection.classList.add("hidden");
      revCountDown.classList.remove("hidden");
    revCountDown.innerHTML = seconds < 10 ? seconds : seconds;
    }

    if (diff < 0) {

      setTimeout(() => {
        window.location.reload();
      }, 0.5 * 1000);
      // launchConfetti()

      //show confetti and hide timer
      
      revCountDown.classList.add("hidden");
      timerSection.classList.add("hidden");
      // confettiCanvas.classList.remove("hidden");
      congoSVG.classList.remove("hidden");
    //   confettiSection.classList.remove("hidden");-----------------------------------

      // store in localstorage
      deadline.setFullYear(deadline.getFullYear() + 1);
      // localStorage.setItem("deadline", deadline.toString());

    //   // Call the function to show different confetti at different time interval
    //   confettiInterval();

    //   // Call the function every 82 seconds
    //   const repeatConfetti = setInterval(() => {
    //     confettiInterval();
    //     // }, 86.4 * 1000);
    //   }, 190.08 * 1000);

      setTimeout(() => {
        clearInterval(repeatConfetti);

        // clearTimeout(intervalId);   // To clear the interval

        // hide confetti and show timer
        timerSection.classList.remove("hidden");

        congoSVG.classList.add("hidden");
        confettiSection.classList.add("hidden");
        // confettiCanvas.classList.add("hidden");
      }, 190 * 2 * 1000);

      clearInterval(countdown);
      resetTimer();
    }
  }, 1000);
};

getValues();
// resetTimer();
