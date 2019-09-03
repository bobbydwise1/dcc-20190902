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

  get(key) {
    for ( let i = 0; i < this.cache.length; i ++ ) {
      if (this.cache[i].key == key) {
        return this.cache[i].value
      }
    }
  return null;
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
  $('#div1').hide()
  $('#div2').hide()
  let recentCache;
  let input0;
  let input1;
  let input12;
  let input2;
  $('#form0').submit(function(){
    event.preventDefault()
    input0 = $('#input-0').val()
    recentCache = new leastRecentlyUsedCache(input0)
    $('#div0').hide()
    $('#div1').show()
  });
  $('#form1').submit(function(){
    event.preventDefault()
    $('#div2').show()
    input1 = $('#input-1').val()
    input12 = $('#input-1-2').val()
    recentCache.set(input1,input12)
    $('#output-section-1').text(JSON.stringify(recentCache.cache))
  });
  $('#form2').submit(function(){
    event.preventDefault()
    input2 = $('#input-2').val()
    $('#output-section-2').text(recentCache.get(input2))
  });
});
