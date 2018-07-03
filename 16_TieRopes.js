function solution(K, A) {
    const N = A.length
        
    var ropes = 0
    var sum = 0

    for (let i=0; i<N; i++) {
        sum += A[i]
        if (sum >= K) {
            sum = 0
            ropes++
        }
    }

    return ropes
}

solution(4, [1, 2, 3, 4, 1, 1, 3])