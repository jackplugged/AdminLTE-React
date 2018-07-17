import namor from "namor";

const icons = [
  { id: 1, color: "aqua", icon: "users" },
  { id: 2, color: "red", icon: "warning" },
  { id: 3, color: "yellow", icon: "shopping-cart" },
  { id: 4, color: "yellow", icon: "shopping-cart" }
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

// Notifications
export const Notification = () => {
  return {
    id: Math.random(),
    color: icons[getRandomInt(0, 3)].color,
    text: namor.generate({ words: 2, numbers: 0 }),
    icon: icons[getRandomInt(0, 3)].icon
  };
};

// Tasks
export const Task = () => {
  return {
    id: Math.random(),
    color: icons[getRandomInt(0, 3)].color,
    text: namor.generate({ words: 2, numbers: 0 }),
    percent: getRandomInt(1, 100)
  };
};

export const User = () => {
  return {
    id: Math.random(),
    img: "http://placehold.it/128x128",
    name: namor.generate({ words: 1, numbers: 0 }),
    time: getRandomInt(1, 23),
    message: namor.generate({ words: 4, numbers: 4 })
  };
};

export function makeData(obj) {
  // Number of data
  return range(getRandomInt(1, 15)).map(d => {
    return {
      ...obj(),
      children: range(10).map(obj)
    };
  });
}
