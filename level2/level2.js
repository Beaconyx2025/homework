import { RESERVATION_LIST } from "./reservation .js";

const form = document.querySelector("form");
const result = document.getElementById("reservation-number");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = document.querySelector('[name="user-name"]').value;
  const userPhone = document.querySelector('[name="user-phone"]').value;

  const foundReservation = RESERVATION_LIST.find((reservation) => {
    return reservation.name === userName && reservation.phone === userPhone;
  });

  if (foundReservation) {
    result.textContent = foundReservation.number;
  } else {
    result.textContent = "일치하는 항목이 없습니다.";
  }
});

console.log(RESERVATION_LIST);

/* 
예약 고객확인하기


*/
