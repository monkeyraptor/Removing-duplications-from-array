function r_d(a) {
    "use strict";
    var b, buffer = [];
    if (a instanceof Array) {
        b = a.slice();
        b.forEach(function (v, i) {
            b.forEach(function (vv, ii) {
                if (i !== ii && v === vv) {
                    b.splice(ii, 1, "_*deleted*_"); // Replace same element with the "_*deleted*_" string.
                }
            });
        });
        b.forEach(function (v) {
            if (!(/_\*deleted\*_/.test(v.toString()))) { // Check the marker.
                buffer.push(v);
            }
        });
    }
    return buffer;
}
