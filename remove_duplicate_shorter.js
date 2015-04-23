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
                b.splice(j, 1, b[j] + " (deleted)"); //substitute the same element with "that_elm (deleted)" token
            }
        }
    }
    //take the non-"deleted" elements to the *buffer* variable
    for (k; k < length; k++) {
        if (!b[k].toString().match("(deleted)")) { //if it doesn't match the token: "(deleted)"
            buffer.push(b[k]);
        }
    }
    //return reconstructed array
    return buffer;
}
