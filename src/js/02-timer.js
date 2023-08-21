import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let timerID
btnStart.disabled = true
// вибір дати

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const currentDay = new Date();
      if (selectedDate <= currentDay) {
          btnStart.disabled = true;
        //   Notiflix.Notify.failure('Please choose a date in the future');
          window.alert('Please choose a date in the future')

      } else {
          btnStart.disabled = false;     
      }
  },
};
flatpickr(input, options);

// Форматування часу
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
// Натискання на кнопку

btnStart.addEventListener('click', onBtnStartClick);
function onBtnStartClick(evt) {
    timerID = setInterval(() => {
        const currentDay = new Date();
        const selectedDate = new Date(input.value);
        const ms = selectedDate.getTime() - currentDay.getTime();
        days.textContent = addLeadingZero(convertMs(ms).days);
        hours.textContent = addLeadingZero(convertMs(ms).hours);
        minutes.textContent = addLeadingZero(convertMs(ms).minutes);
        seconds.textContent = addLeadingZero(convertMs(ms).seconds);
        if (ms < 1000) {
            clearInterval(timerID)
        }


    }, 1000)
}



