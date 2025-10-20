class Bird {
  constructor() {
    console.log("I'm a bird. 🐦");
  }
}

class Flamingo extends Bird {
  constructor() {
    super(); // Doit être appelé en premier !
    console.log("I'm pink. 🌸");
  }
}

const pet = new Flamingo();
//the output will be :
//I'm pink. 🌸
//I'm a bird. 🕊️