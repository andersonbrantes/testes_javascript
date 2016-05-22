
try {
  var newHallOfFame = ["Dark Frostring", "Render Tallborn"];
  if(list === undefined) {
    throw new ReferenceError();
  }
  
  if( (list instanceof Array) === undefined) {
    throw new TypeError();
  }

  list.concat(newHallOfFame);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log(error + "\n" +
          "The Hof roster does not exist as \"list\"!\n" +
          "Check for relocation in master document.");
  }
  if (error instanceof TypeError) {
    console.log(error + "\n" +
      "Alas, \"list\" exists, but is no longer as Array.\n" +
      "Check for a disastrous overwrite!");    
  }
}
