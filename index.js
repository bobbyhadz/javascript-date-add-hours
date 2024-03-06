// EXAMPLE 1 - Add Hours to a Date in JavaScript

function addHours(date, hours) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  return date;
}

// ✅ Add 1 hour to the current date
const result1 = addHours(new Date(), 1);
console.log(result1); // 👉️ 2023-07-26T07:23:49.670Z

// ✅ Add 2 hours to a different date
const date = new Date('2024-03-14T18:30:05.000Z');

const result2 = addHours(date, 2);
console.log(result2); // 👉️ 2024-03-14T20:30:05.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add Hours to a Date without mutation

// function addHours(date, hours) {
//   const dateCopy = new Date(date);

//   dateCopy.setTime(dateCopy.getTime() + hours * 60 * 60 * 1000);

//   return dateCopy;
// }

// const date = new Date('2024-03-14T12:30:05.000Z');

// const result = addHours(date, 2);
// console.log(result); // 👉️ 2024-03-14T14:30:05.000Z

// console.log(date); // 👉️ 2024-03-14T12:30:05.000Z

// ------------------------------------------------------------------

// // EXAMPLE 3 - Add Hours to a Date using date-fns

// import {addHours} from 'date-fns';

// const date = new Date('2024-03-14T12:30:05.000Z');

// const result1 = addHours(date, 2);
// console.log(result1); // 👉️ 2024-03-14T14:30:05.000Z

// const result2 = addHours(date, 4);
// console.log(result2); // 👉️ 2024-03-14T16:30:05.000Z

// console.log(date); // 👉️ 2024-03-14T12:30:05.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 - Add Hours to a Date using moment.js

// import moment from 'moment';

// const date = new Date('2024-03-14T12:30:05.000Z');

// const result1 = moment(date).add(2, 'hours');
// console.log(result1); // 👉️ 2024-03-14T09:55:40.000Z

// const result2 = moment(date).add(4, 'hours');
// console.log(result2); // 👉️ 2024-03-14T09:56:01.000Z

// console.log(date); // 👉️ 2024-03-14T12:30:05.000Z
