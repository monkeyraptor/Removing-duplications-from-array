function r_d(a) {
    "use strict";
    var b = a.slice(), //copy array
        i = 0,
        k = 0,
        length = b.length,
        j,
        buffer = [];

    //splicing same elements
    for (i; i < length; i++) {
        j = 0;
        for (j; j < length; j++) {
            if (i < j && b[j] === b[i]) {
                b.splice(j, 1, "deleted");
            }
        }
    }
    //removing "deleted" elements
    for (k; k < length; k++) {
        if (b[k] !== "deleted") {
            buffer.push(b[k]);
        }
    }
    //return reconstructed array
    return buffer;
}
