export function greetFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning, Boss";
  } else if (time < 16) {
    greeting = "Good day, Boss";
  } else {
    greeting = "Good evening, Boss";
  }
  return greeting;
}
