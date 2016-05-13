treasureChest

goldCoins: 10,000,
magicalItem: "Crown of Speed",
neckLaces: ["ruby", "pearl", "sapphire", "diamond"],
openLid: function() {
  alert("Creeeeeak!");
}

// 1

for(var i = 0; i < treasureChest.neckLaces.length; i++){
  console.log(treasureChest.neckLaces[i]);
}


// 2

var x = treasureChest.neckLaces.length;
for(var i = 0; i < x; i++){
  console.log(treasureChest.neckLaces[i]);
}
