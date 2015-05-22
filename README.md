# Removing duplicates from an array
**JavaScript**: removing duplicated elements in an array without sorting them.

Usage: `r_d(the_array)`

Example:
```javascript
var array = [1, 2, 3, 4, "doo", "dee", "doo", "♪", "doo"],
    trimmed = r_d(array);

// *trimmed* variable output will be an array.
// It consists of [1, 2, 3, 4, "doo, "dee", "♪"]
```

>You can use either the `"shortened"` version or the `"obj"` snippet. ~~Both will do the same job.~~ The `shortened` version will return the original (not sorted) array sequence and the `obj` will return the sorted array. Both will return an array without the duplicated elements.
>The 1st version (longer snippet) was the initial tinkering.

#### Idea explanation (JavaScript) and Python snippet

1. Kinda an explanation [on Monkey Raptor](http://monkeyraptor.johanpaul.net/2015/04/javascript-removing-same-elements-in.html)

2. Python equivalency post [on Monkey Raptor](http://monkeyraptor.johanpaul.net/2015/04/python-removing-same-elements-in-array.html)
