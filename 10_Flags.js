var log = console.log;

function solution(A) {
    const len = A.length;
    const peaks = [];
    for (let i = 1; i < len - 1; i++)
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) peaks.push(i);
    var plen = peaks.length;

    if (plen < 1) return 0;
    if (plen === 1) return 1;

    // one case didn't work if +1 wasn't added here
    var sqrLen = Math.floor(Math.sqrt(len)) + 1;

    for (let i = sqrLen; i > 1; i--) {
        var flagsLeft = i - 1;
        var lastPeak = 0;

        for (let j = 1; j < plen; j++) {
            if (peaks[j] - peaks[lastPeak] >= i) {
                flagsLeft--;
                lastPeak = j;
            }
        }

        if (flagsLeft < 1) {
            return i;
        }
    }

    return 0;
}

var inp = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];

solution([1, 2, 1]);
// solution([3])
