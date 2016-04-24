var aquarium = {
  Nemo: { type: "fish", species: "clownfish", length: 3.7  },
  Dory: { type: "fish", species: "blue tang", length: 6.2  },

  addCritter: function( name, type, species, length) {
    this[name] = { type: type, species: species, length: length }
  }
}

aquarium.takeOut = function(name) {
  this[name].name = name;
  var temp = this[name];
  delete this[name];
  return temp;
}

var fish = aquarium.takeOut("Nemo");

console.log(fish);
