export function shuffle(array) {
  const shuffled = [...array];
  for (var i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}
export function getRandomNumber({ min, max }) {
  return Math.random() * (max - min) + min;
}
