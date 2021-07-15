var names = ["Angel", "Jemin", "Jeel", "Viraj", "Kedar", "Niraj", "Jenil", "Jiya", "Divyesh", "Jigar"];


for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    console.log("Good Bye " + (names[i]));
  } else {
    console.log("Hello " + (names[i]));
  }
}
