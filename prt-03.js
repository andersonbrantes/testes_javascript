function Fencepost(x, y, postNum) {
	this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionTo = [];
  this.sendRopeTo = function(connectedPost){
  	this.connectionTo.push(connectedPost);
  };
}
