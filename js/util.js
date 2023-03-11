import {DESCRIPTIONS, COMMENTS, NAMES} from './data.js';

const randomInteger = function (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const randomArrayElement = (elements) => elements[randomInteger(0, elements.length - 1)];

const createDescription = () => ({
  id: randomInteger(1, 25),
  url: `photos/${randomInteger(1, 25)}.jpg`,
  description: randomArrayElement(DESCRIPTIONS),
  likes: randomInteger(15, 200),
  comments:
  {
    id: randomInteger(1, 2500),
    avatar: `img/avatar/${randomInteger(1, 6)}.svg`,
    message: randomArrayElement(COMMENTS),
    name: randomArrayElement(NAMES)
  }
});

export {createDescription};
