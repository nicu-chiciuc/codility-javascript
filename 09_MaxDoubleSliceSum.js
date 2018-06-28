function bad_solution(A) {
    var len = A.length;
    var maxEndingHere = 0,
        maxSoFar = 0,
        smallestInside = A[1];

    for (let i = 2; i < len - 1; i++) {
        let current = A[i];

        if (current < smallestInside) {
            maxEndingHere = maxEndingHere + smallestInside;
            smallestInside = current;
        } else {
            if (maxEndingHere + current < current - current) {
                maxEndingHere = current - current;
                smallestInside = current;
            } else {
                maxEndingHere = maxEndingHere + current;
            }
        }

        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

function solution(A) {
    var len = A.length;
    var maxFromLeft = new Array(len).fill(0);
    var maxFromRight = new Array(len).fill(0);

    // Start Kandane from left
    for (let i = 1; i < len - 1; i++)
        maxFromLeft[i] = Math.max(maxFromLeft[i - 1] + A[i], A[i], 0); // this 0 is very important,
    // otherwise some cases will not pass e.g. [0,10,-5,-2,0]

    // Start Kandane from right
    for (let i = len - 2; i > 0; i--)
        maxFromRight[i] = Math.max(maxFromRight[i + 1] + A[i], A[i], 0);

    var max = 0;

    for (let i = 1; i < len - 1; i++)
        max = Math.max(max, maxFromLeft[i - 1] + maxFromRight[i + 1]);

    return max;
}

// Tests
var inps = [
    [17, [3, 2, 6, -1, 4, 5, -1, 2]],
    [0, [1, 2, 3]],
    [3, [1, 3, 2, 1]],
    [0, [0, -3, -2, 0]],
    [24, [0, 3, -10, 3, -10, 20, 1, 9]],
    [0, [-1, -1, -1, -1, -1, -10000, -1]],
    [37, [1, 3, 4, -10, 30, -10, 3, 3, 1]]
];

var data = inps.map(([out, inp]) => {
    var realOut = solution(inp);
    return [inp, out, realOut, out === realOut];
});

console.table(data);
