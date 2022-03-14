const people = [
  {
    name: "Petras",
    color: "blue",
  },
  {
    name: "Petras",
    color: "red",
  },
  {
    name: "Petras",
    color: "green",
  },
  {
    name: "Petras",
    color: "blue",
  },
  {
    name: "Petras",
    color: "green",
  },
  {
    name: "Petras",
    color: "orange",
  },
];

let color = people.map((item) => item.color);
const counts = {};
color.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});

// let colors = [];
// console.log(counts);
// for (const person of people) {
//   const { color } = person;
//   colors.push(color);
// }
// console.log(colors);
// for (let i = 0; i < people.length; i++) {
//   const person = people[i];
//   const { color } = person;
//   colors.push(color);
// }
