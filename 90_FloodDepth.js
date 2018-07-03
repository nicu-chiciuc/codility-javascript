function solution(A) {
    const N = A.length

    if (N < 3) return 0

    var tallestLeft = A[0]
    var smallest = A[0]
    var now

    var deepest = 0

    for (let i=1; i<N; i++) {
        now = A[i]
        if (now < smallest) {
            smallest = now
        }
        else if (now < tallestLeft) {
            deepest = Math.max(deepest, now - smallest)
        }
        else {
            deepest = Math.max(deepest, tallestLeft - smallest)
            tallestLeft = now
            smallest = now
        }
    }

    return deepest

}

solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2])