function solution(A) {
    const N = A.length

    const maxNum = 601 // it didn't work for 1 test when set to 301


    const bigArr = new Array(2).fill(0).map(
        a=>new Array(maxNum+1).fill(0))

    var prev=1, now=0

    bigArr[0][0] = 1

    for (let i=1; i<=N; i++) {
        [prev, now] = [now, prev]
        for (let j=0; j<=maxNum; j++)
            bigArr[now][j] = 0
            
        for (let j=0; j<=maxNum; j++) {
            if (bigArr[prev][j]) {
                const h = Math.abs(j + A[i-1])
                const k = Math.abs(j - A[i-1])
                if (h <= maxNum) bigArr[now][h] = 1
                if (k <= maxNum) bigArr[now][k] = 1
            }
        }
    }

    for (let i=0; i<=maxNum; i++)
        if (bigArr[now][i])
            return i

}

solution([1, 5, 2, -2])