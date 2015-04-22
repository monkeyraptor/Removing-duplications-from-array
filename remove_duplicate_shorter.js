function r_d(a) {
    "use strict";
    var b = a.slice(), //copy array
        buffer = [],
        i = 0,
        j,
        k = 0,
        length = b.length;

    //splicing same elements
    for (i; i < length; i++) {
        j = 0;
        for (j; j < length; j++) {
            if (i < j && b[j] === b[i]) {
                b.splice(j, 1, b[j] + " (deleted)"); //added token the "original_element (deleted)" string
            }
        }
    }
    //removing "deleted" elements
    for (k; k < length; k++) {
        if (!b[k].toString().match("(deleted)")) { //if it matches the string "(deleted)"
            buffer.push(b[k]);
        }
    }
    //return reconstructed array
    return buffer;
}
