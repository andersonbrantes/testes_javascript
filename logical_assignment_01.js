
var armory = {
  addSword = function (sword) {
    this.swords = this.swords || [ ];
    this.swords.push(sword);
  }
};


armory.addSword("Broadsword");
armory.addSword("Katana");


