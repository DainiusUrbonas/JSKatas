var number = function(busStops){
  // Good Luck!
  var leftovers = 0
  for(let e of busStops){
    leftovers += e[0]
    leftovers -= e[1]
  }
  return leftovers
}