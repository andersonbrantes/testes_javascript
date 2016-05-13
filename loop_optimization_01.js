
var treasureChest = {
  goldCoins: 10.000,
  magicalItem: "Crown of Speed",
  neckLaces: ["ruby", "pearl", "sapphire", "diamond"],
  openLid: function() {
    alert("Creeeeeak!");
  }
}


// 1
for(var i = 0; i < treasureChest.neckLaces.length; i++){
  console.log("v1 - " + treasureChest.neckLaces[i]);
}


// 2
var x = treasureChest.neckLaces.length;
for(var i = 0; i < x; i++){
  console.log("v2 - " + treasureChest.neckLaces[i]);
}


// 3
for(var i = 0, x = treasureChest.neckLaces.length; i < x; i++){
  console.log("v3 - " + treasureChest.neckLaces[i]);
}


// 4
var list = treasureChest.neckLaces;
for(var i = 0, x = treasureChest.neckLaces.length; i < x; i++){
  console.log("v4 - " + list[i]);
}
