var r_d = function (a) {
    "use strict";
    var b,
        buffer = [];
    if (a instanceof Array) {
        b = a.slice();
        b.forEach(function (v_i, i_i) {        
            b.forEach(function (v_j, i_j) {
                if (i_i < i_j && v_j === v_i) {
                    b.splice(i_j, 1, v_j + " (*)");
                }
            });
        });
        b.forEach(function (v) {    
            if (!v.toString().match(/\(\*\)/g)) {
                buffer.push(v);
            }
        });
    }
    return buffer;
};
