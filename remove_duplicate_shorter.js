var r_d = function (a) {
    "use strict";
    var b,
        buffer = [];
    if (a instanceof Array) {
        b = a.slice(); // Copy array.
        b.forEach(function (v_i, i_i) { // 2D array iteration - parent (outer) block.
            b.forEach(function (v_j, i_j) { // 2D array iteration - child (inner) block.
                if (i_i < i_j && v_j === v_i) { // Can also: if (i_i !== i_j && v_j === v_i) { ...
                    b.splice(i_j, 1, v_j + " (*)"); // The " (*)" is the "same element" marker.
                }
            });
        });
        b.forEach(function (v) {    
            if (!v.toString().match(/\(\*\)/g)) { // Check that marker. If it isn't there, then...
                buffer.push(v); // include it in the output (*buffer* variable) array.
            }
        });
    }
    return buffer;
};
