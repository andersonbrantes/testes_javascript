
try {
  var newHallOfFame = ["Dark Frostring", "Render Tallborn"];
  list.concat(newHallOfFame);
} catch (error) {
  if (error instanceof ReferenceError) {
    alert(error + "\n" +
          "The Hof roster does not exist as \"list\"!\n" +
          "Check for relocation in master document.");
  }
  if (error instanceof TypeError) {
    alert(error + "\n" +
      "Alas, the Hall's list has no concat method \n" +
      "Check for a disastrous overwrite!");    
  }
}
