function countSol (n) {
    if ((n === 1) || (n === 0) ) {
        return 1
    }
var count = 0
for (var i = 0; i < (n**n); i++){
  var nBoard = new Board ({n: n});
  //convert i to a base-N number between 0 and n^n to be interpreted as coordinates
var coords = i.toString(n)
while(coords.length < n){
  coords += '0'
}
for (r = 0; r < n; r++){
  var c = coords[r]
  nBoard.togglePiece(r, c)
}
if(!nBoard.hasAnyQueensConflicts()) {
  count++
}}
return count
}

