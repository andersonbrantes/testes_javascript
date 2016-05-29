// single global object, "wrapper" for the space
var HOFMASTER = {
  list: ['Jar Trenn', 'MAximo Rarter'],
  hof: document.getElementById("hof"),
  fragment: document.createDocumentFragment(),
  element: undefined,
  displayHOF: function(){
    for(var i = 0, x = this.list.length; i<x; i++){
      this.element = document.createElement("li");
      this.element.appendChild(document.createTextMode(this.list[i]));
      this.fragment.appendChild(this.element);
    }
    this.hof.appendChild(this.fragment);
  } 
}
