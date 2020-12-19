
let tiles = [{tile: 'N', score: 1, bonus: 3}, 
{tile: 'K', score: 5},  
{tile: 'Z', score: 10}, 
{tile: 'X', score: 8, bonus: 5}, 
{tile: 'D', score: 2}, 
{tile: 'A', score: 1}, 
{tile: 'E', score: 1}];

function maximumScore(hand) {
let total = 0;

for (let tile of hand) {
  console.log(tile.score, title.bonus);
  total += tile["score"];
  if (tile.bonus != undefined){
    total += tile.bonus;
  }
}
return total;
}
