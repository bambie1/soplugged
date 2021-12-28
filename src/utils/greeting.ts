export function greetFunction(name: string) {
  var greeting;
  var time = new Date().getHours();
  let displayName = name ? name.split(" ")[0] : "Boss";
  if (time < 10) {
    greeting = `Good morning, ${displayName}`;
  } else if (time < 16) {
    greeting = `Good day ${displayName},`;
  } else {
    greeting = `Good evening ${displayName},`;
  }
  return greeting;
}
