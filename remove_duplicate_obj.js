var r_d = function (a) {
    "use strict";
    var result = {},
        obj;
    if (a instanceof Array) {
        a.forEach(function (v, i) {
            result[v] = i;
        });
    }
    if (result) {
        obj = Object.keys(result);
        result = obj;
        result.forEach(function (v, i) {
            if (!isNaN(Number(v))) {
                result[i] = Number(v);
            }
        });
    }
    return result;
};
