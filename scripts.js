/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

   set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
   get(key): gets the value at key. If no such key exists, return null.

Each operation should run in O(1) time.
*/

class leastRecentlyUsedCache{
  constructor(n=1) {
    this.n = n
    this.cache = []
  }

  set(key,value) {
    if (this.cache.length < this.n) {
      this.cache.push({'key': key, 'value': value})
    } else {
      this.cache.shift()
      this.cache.push({'key': key, 'value': value})
    }
    return this.cache
  }
}

let test0 = new leastRecentlyUsedCache(5)
console.log(test0)
test0.set('name','Joe')
test0.set('name','Jane')
test0.set('name','Jack')
test0.set('name','Juile')
test0.set('name','Julian')
test0.set('name','Janice')
console.log(test0)

$(document).ready(function() {
  $('#output-section-0').text(1)
  $('#form1').submit(function(){
    event.preventDefault()
    $('#output-section-1').text(1)
  });
});
