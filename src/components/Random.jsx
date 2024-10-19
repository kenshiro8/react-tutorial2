export default function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return random;
}