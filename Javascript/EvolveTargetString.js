function generateRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function fitness(target, testString) {
  var score = 0;
  for (var i = 0; i < target.length; i++) {
    if (target[i] === testString[i]) {
      score++;
    }
  }
  return score;
}

function evolve(target) {
  var currentGuess = generateRandomString(target.length);
  var generation = 1;

  while (currentGuess !== target) {
    var newGuess = '';
    for (var i = 0; i < target.length; i++) {
      if (Math.random() < 0.5) {
        newGuess += currentGuess[i];
      } else {
        newGuess += generateRandomString(1);
      }
    }
    if (fitness(target, newGuess) > fitness(target, currentGuess)) {
      currentGuess = newGuess;
      console.log('Generation:', generation, 'Guess:', currentGuess);
    }
    generation++;
  }
  console.log('Target string', target, 'evolved in', generation, 'generations.');
}

// Example usage:
evolve('Hello, World!');
