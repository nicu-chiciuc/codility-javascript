// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const N = A.length;

    // +1 because includes first 0
    const maxNums = 2 * N + 1;

    // Save all occurences
    const arr = new Array(maxNums).fill(0);
    for (let i = 0; i < N; i++) arr[A[i]]++;

    const data = new Array(maxNums).fill(0);
    for (let i = 1; i < maxNums; i++)
        if (arr[i]) {
            for (let j = i; j < maxNums; j += i) {
                data[j] += arr[i];
            }
        }

    const ret = A.map(v => N - data[v]);

    //     console.log({arr})
    //     console.table(ret)
    //     console.table(data.map(v=>N-v))
    return ret;
}

var inp = [3, 1, 2, 3, 6];
solution(inp);
