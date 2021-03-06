/*
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, 
and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, 
since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. 
He tells them that he will only sit during the session if they show the same motive at most N times. 
Luckily, Alice and Bob are able to encode the motive as a number. 
Can you help them to remove numbers such that their list contains each number only up to N times, 
without changing the order?

Task
Given a list lst and a number N, 
create a new list that contains each number of lst at most N times without reordering. 
For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, 
and then take 3, which leads to [1,2,3,1,2,3].
*/

//My solution
function deleteNth(arr,n){
  var x = []
  var newArr = []
  for(let e of arr){
    let flag = false
    for(let xElement of x){
      if(xElement.number == e){
        flag = true
        if(xElement.count < n){
          xElement.count++
          newArr.push(e)
        }
      }
    }
    if(!flag){
      x.push({
        number: e,
        count: 1
      })
      newArr.push(e)
    }
  }
  return newArr
}

//Best Practices
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}