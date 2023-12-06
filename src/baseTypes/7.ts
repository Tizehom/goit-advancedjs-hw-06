/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayWeek): boolean {
  return day === DayWeek.Saturday || day === DayWeek.Sunday;
}

if (isWeekend(DayWeek.Wednesday)) {
  console.log("Це вихідний день");
} else {
  console.log("Це робочий день");
}
